import { Schema, model } from "mongoose";

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

const daysSchema = new Schema({
  monday: { type: String, required: true, default: "" },
  tuesday: { type: String, required: true, default: "" },
  wednesday: { type: String, required: true, default: "" },
  thursday: { type: String, required: true, default: "" },
  friday: { type: String, required: true, default: "" },
  saturday: { type: String, required: true, default: "" },
  sunday: { type: String, required: true, default: "" },
});

const defaultDays = {
  monday: "",
  tuesday: "",
  wednesday: "",
  thursday: "",
  friday: "",
  saturday: "",
  sunday: "",
};

const basicInfoSchema = new Schema({
  businessName: { type: String, required: true },
  businessId: { type: String, required: true },
  owner: { type: String, required: true },
  password: { type: String, required: true },
  venueName: { type: String, required: true },
  contact: { type: contactSchema, required: true },
  address: { type: addressSchema, required: true },
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

const orderItemsSchema = new Schema({
  itemName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
});

const paymentDetailsSchema = new Schema({
  paymentMethod: { type: String, required: true },
  chargedAmount: { type: Number, required: true },
});

const additionalInfoSchema = new Schema({
  orderType: { type: String, required: true },
  orderStatus: { type: String, required: true },
});

const historySchema = new Schema(
  {
    restaurantName: { type: String, /* required: true */ default: "No information" },
    items: {
      type: [orderItemsSchema],
      required: true,
    },
    totalSum: { type: Number, required: true },
    paymentDetails: {
      type: paymentDetailsSchema,
      required: true,
    },
    additionalInfo: {
      type: additionalInfoSchema,
      required: true,
    },
    // favorited: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  { timestamps: true }
);

const searchedRestaurantsSchema = new Schema({
  basicInfo: { type: basicInfoSchema, required: true },
  openAndCloseHours: { type: daysSchema, required: true, default: defaultDays },
  cuisine: { type: [String], required: true, default: [] },
  restaurantType: { type: [String], required: true, default: [] },
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
  orderHistory: { type: [historySchema], default: [] },
});

const SearchedRestaurant = model("SearchedRestaurant", searchedRestaurantsSchema);

export default SearchedRestaurant;
