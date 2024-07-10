import { Schema, model } from "mongoose";

const menuItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const menuSchema = new Schema({
  cuisine: { type: String, required: true },
  items: { type: [menuItemSchema], required: true },
});

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  userRatings: {
    type: Number,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
  price_level: {
    type: Number,
    required: true,
  },
  menu: {
    type: menuSchema,
    required: true,
    default: {
      cuisine: "Italian",
      items: [
        {
          name: "Margherita Pizza",
          description: "Classic cheese and tomato pizza",
          price: 8.99,
        },
        {
          name: "Pepperoni Pizza",
          description: "Pepperoni, cheese, and tomato pizza",
          price: 9.99,
        },
        {
          name: "Caesar Salad",
          description: "Romaine lettuce, croutons, and Caesar dressing",
          price: 7.99,
        },
        {
          name: "Pasta Carbonara",
          description: "Pasta with creamy bacon sauce",
          price: 11.99,
        },
      ],
    },
  },
});

const Restaurant = model("Restaurant", restaurantSchema);
export default Restaurant;
