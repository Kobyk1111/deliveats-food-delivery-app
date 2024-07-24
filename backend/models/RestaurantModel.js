import { Schema, model } from "mongoose";

// const menuItemSchema = new Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
// });

// const menuSchema = new Schema({
//   cuisine: { type: String, required: true },
//   items: { type: [menuItemSchema], required: true },
// });

// const restaurantSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   rating: {
//     type: Number,
//     required: true,
//   },
//   userRatings: {
//     type: Number,
//     required: true,
//   },
//   isOpen: {
//     type: Boolean,
//     required: true,
//   },
//   price_level: {
//     type: Number,
//     required: true,
//   },
//   favorited: {
//     type: Boolean,
//     default: false,
//   },
//   menu: {
//     type: menuSchema,
//     required: true,
//     default: {
//       cuisine: "Italian",
//       items: [
//         {
//           name: "Margherita Pizza",
//           description: "Classic cheese and tomato pizza",
//           price: 8.99,
//         },
//         {
//           name: "Pepperoni Pizza",
//           description: "Pepperoni, cheese, and tomato pizza",
//           price: 9.99,
//         },
//         {
//           name: "Caesar Salad",
//           description: "Romaine lettuce, croutons, and Caesar dressing",
//           price: 7.99,
//         },
//         {
//           name: "Pasta Carbonara",
//           description: "Pasta with creamy bacon sauce",
//           price: 11.99,
//         },
//       ],
//     },
//   },
// });

// const Restaurant = model("Restaurant", restaurantSchema);
// export default Restaurant;

const contactSchema = new Schema({
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
});

// const hoursSchema = new Schema({
//   open: { type: String, required: true },
//   close: { type: String, required: true },
// });

const hoursSchema = new Schema({
  open: { type: String },
  close: { type: String },
});

// const daysSchema = new Schema({
//   monday: { type: hoursSchema, required: true },
//   tuesday: { type: hoursSchema, required: true },
//   wednesday: { type: hoursSchema, required: true },
//   thursday: { type: hoursSchema, required: true },
//   friday: { type: hoursSchema, required: true },
//   saturday: { type: hoursSchema, required: true },
//   sunday: { type: hoursSchema, required: true },
// });

const daysSchema = new Schema({
  monday: { type: hoursSchema },
  tuesday: { type: hoursSchema },
  wednesday: { type: hoursSchema },
  thursday: { type: hoursSchema },
  friday: { type: hoursSchema },
  saturday: { type: hoursSchema },
  sunday: { type: hoursSchema },
});

const basicInfoSchema = new Schema({
  businessName: { type: String, required: true },
  businessId: { type: String, required: true },
  owner: { type: String, required: true },
  password: { type: String, required: true },
  venueName: { type: String, required: true },
  contact: { type: contactSchema, required: true },
  address: { type: addressSchema, required: true },
  // openAndCloseHours: { type: daysSchema, required: true },
  openAndCloseHours: { type: daysSchema },
});

const menuItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const menuCategorySchema = new Schema({
  category: { type: String, required: true },
  items: { type: [menuItemSchema], required: true },
});

const digitalPresenceSchema = new Schema({
  photos: { type: [String], required: true, default: [] },
  socialMedia: {
    facebook: { type: String, required: true, default: "Social" },
    instagram: { type: String, required: true, default: "Social" },
  },
});

const offerSchema = new Schema({
  description: { type: String, required: true, default: "No offers" },
  code: { type: String, required: true, default: "No code" },
});

const promotionalInfoSchema = new Schema({
  currentOffers: { type: [offerSchema], required: true, default: [] },
  loyaltyPrograms: { type: String, required: true, default: "no loyalties" },
});

const restaurantSchema = new Schema({
  basicInfo: { type: basicInfoSchema, required: true },
  cuisine: { type: [String], required: true, default: [] },
  menu: { type: [menuCategorySchema], required: true, default: [] },
  digitalPresence: {
    type: digitalPresenceSchema,
    required: true,
    default: {
      photos: ["no image"],
      socialMedia: {
        facebook: "Social",
        instagram: "Social",
      },
    },
  },
  promotionalInfo: {
    type: promotionalInfoSchema,
    required: true,
    default: {
      currentOffers: [],
      loyaltyPrograms: "no loyalties",
    },
  },
});

const Restaurant = model("Restaurant", restaurantSchema);

export default Restaurant;
