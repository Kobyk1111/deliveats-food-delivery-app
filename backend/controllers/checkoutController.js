import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function checkout(req, res, next) {
  const { basket, id } = req.body;

  console.log(basket);

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
