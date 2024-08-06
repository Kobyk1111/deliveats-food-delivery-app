import Stripe from "stripe";
import User from "../models/UserModel.js";
import Restaurant from "../models/RestaurantModel.js";
import OrderHistory from "../models/OrderHistoryModel.js";
import createHttpError from "http-errors";
import { io } from "../index.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function checkout(req, res, next) {
  const { basket, id } = req.body;

  try {
    const lineItems = basket.map((product) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: product.name,
          description: product.description,
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "paypal"],
      line_items: lineItems,
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["DE"], // Allow only Germany
      },
      success_url: "http://localhost:5173/success",
      cancel_url: `http://localhost:5173/restaurant/${id}`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error in processing checkout"));
  }
}

export async function setOrderDetails(req, res, next) {
  const { sessionId, basket, totalSum, deliveryOption, restaurantName } = req.body;
  const { id } = req.params;

  try {
    // Promise.all will make the two functions run at the same time since none of them depends on the other.
    const result = Promise.all([
      stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["payment_intent.payment_method"],
      }),
      stripe.checkout.sessions.listLineItems(sessionId),
    ]);

    // const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ["payment_intent.payment_method"] });
    // const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);
    // console.log(session);
    // console.log(lineItems);
    // console.log(JSON.stringify(await result));
    const orderHistory = JSON.stringify(await result);

    if (!orderHistory) {
      return next(createHttpError(400, "Order History could not be retrieved"));
    }

    const basketItems = basket.map((item) => {
      return {
        itemName: item.name,
        price: item.price,
        quantity: item.quantity,
        description: item.description,
      };
    });

    const orderHistorySaved = {
      restaurantName: restaurantName,
      items: basketItems,
      totalSum: totalSum,
      paymentDetails: {
        paymentMethod: "Paypal",
        chargedAmount: totalSum,
      },
      additionalInfo: {
        orderType: deliveryOption,
        orderStatus: "Delivered",
      },
    };

    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, "No User found"));
    }

    const options = {
      new: true,
      runValidators: true,
    };

    const updatedUser = await User.findByIdAndUpdate(id, { $push: { orderHistory: orderHistorySaved } }, options);

    console.log("Order history saved");

    res.json({ orderHistory: updatedUser.orderHistory });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Server error"));
  }
}

export async function setOrder(req, res, next) {
  const { sessionId, basket, totalSum, deliveryOption, restaurantName } = req.body;

  try {
    const basketItems = basket.map((item) => {
      return {
        itemName: item.name,
        price: item.price,
        quantity: item.quantity,
        description: item.description,
      };
    });

    const orderHistorySaved = {
      restaurantName: restaurantName,

      items: basketItems,
      totalSum: totalSum,
      paymentDetails: {
        paymentMethod: "Paypal",
        chargedAmount: totalSum,
      },
      additionalInfo: {
        orderType: deliveryOption,
        orderStatus: "delivered",
      },
    };

    const newOrder = await OrderHistory.create(orderHistorySaved);

    res.json({ id: newOrder._id });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Order could not be created"));
  }
}

export async function setOrderOfUser(req, res, next) {
  const { id } = req.params;
  const { orderId } = req.body;

  try {
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, "No User found"));
    }

    const options = {
      new: true,
      runValidators: true,
    };

    const updatedUser = await User.findByIdAndUpdate(id, {
      $push: { orderHistory: orderId },
      options,
    });

    await updatedUser.populate("orderHistory");

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "OrderId could not be added to User"));
  }
}

export async function getOrderHistory(req, res, next) {
  const { id } = req.params;

  try {
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, "No User found"));
    }

    await foundUser.populate("orderHistory");

    res.json({ orderHistory: foundUser.orderHistory });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Order history could not be found"));
  }
}

export async function sendOrderToRestaurant(req, res, next) {
  const { sessionId, newOrderId } = req.body;
  const { id } = req.params;

  try {
    const foundRestaurant = await Restaurant.findById(id);

    if (!foundRestaurant) {
      return next(createHttpError(404, "No Restaurant found to process your order"));
    }

    // Promise.all will make the two functions run at the same time since none of them depends on the other.
    const result = Promise.all([
      stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["payment_intent.payment_method"],
      }),
      stripe.checkout.sessions.listLineItems(sessionId),
    ]);

    const orderDetails = await result;

    const orderObj = {
      order: newOrderId,
      customerName: orderDetails[0].customer_details.name,
      customerEmail: orderDetails[0].customer_details.email,
      customerAddress: `${orderDetails[0].customer_details.address.line1}, ${orderDetails[0].customer_details.address.city}`,
    };

    const options = {
      new: true,
      runValidators: true,
    };

    await Restaurant.findByIdAndUpdate(id, { $push: { orderHistory: orderObj } }, options);

    const updatedRestaurant = await Restaurant.findById(id).populate("orderHistory.order");

    // Emit a real-time update event
    io.to(`restaurant_${id}`).emit("newOrder", updatedRestaurant);

    console.log(`Emitting newOrder to room: restaurant_${id} with data:`, updatedRestaurant);

    res.json({ message: `Your Order has been sent to the restaurant successfully`, orderId: orderObj.order });
  } catch (error) {
    console.error(error);
    next(createHttpError(500, "Order could not be sent to the restaurant"));
  }
}


export async function deleteOrderHistory(req, res, next) {
  const { id } = req.params;

  try {
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, "No User found"));
    }

    // Clear the order history array
    foundUser.orderHistory = [];
    await foundUser.save();

    await foundUser.populate("orderHistory");

    res.json({ message: "Order history successfully deleted", orderHistory: foundUser.orderHistory });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Order history could not be deleted"));
  }
}
