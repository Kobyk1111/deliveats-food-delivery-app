import Stripe from "stripe";
import User from "../models/UserModel.js";
import OrderHistory from "../models/OrderHistoryModel.js";
import createHttpError from "http-errors";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function checkout(req, res, next) {
  const { basket, id } = req.body;

  // console.log(basket);

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
}

export async function setOrderDetails(req, res, next) {
  const { sessionId, basket, totalSum, deliveryOption, restaurantName } =
    req.body;
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

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $push: { orderHistory: orderHistorySaved } },
      options
    );

    console.log("Order history saved");

    res.json({ orderHistory: updatedUser.orderHistory });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Server error"));
  }
}

export async function setOrder(req, res, next) {
  const { sessionId, basket, totalSum, deliveryOption, restaurantName } =
    req.body;

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

    console.log(newOrder);

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
      $push: { orders: orderId },
      options,
    });

    await updatedUser.populate("orders");

    console.log(updatedUser);

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

    res.json({ orderHistory: foundUser.orderHistory });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Order history could not be found"));
  }
}
