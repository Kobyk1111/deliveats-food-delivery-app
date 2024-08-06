import { Schema, model } from "mongoose";

// const orderItemsSchema = new Schema({
//   itemName: { type: String, required: true },
//   price: { type: Number, required: true },
//   quantity: { type: Number, required: true },
//   description: { type: String, required: true },
// });

// const paymentDetailsSchema = new Schema({
//   paymentMethod: { type: String, required: true },
//   chargedAmount: { type: Number, required: true },
// });

// const additionalInfoSchema = new Schema({
//   orderType: { type: String, required: true },
//   orderStatus: { type: String, required: true },
// });

// const historySchema = new Schema(
//   {
//     restaurantName: { type: String, /* required: true */ default: "No information" },
//     items: {
//       type: [orderItemsSchema],
//       required: true,
//     },
//     totalSum: { type: Number, required: true },
//     paymentDetails: {
//       type: paymentDetailsSchema,
//       required: true,
//     },
//     additionalInfo: {
//       type: additionalInfoSchema,
//       required: true,
//     },
//     // favorited: {
//     //   type: Boolean,
//     //   default: false,
//     // },
//   },
//   { timestamps: true }
// );

const addressesSchema = new Schema({
  label: { type: String, required: true },
  address: { type: String, required: true },
});

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // orderHistory: {
    //   type: [historySchema],
    //   default: [],
    // },
    orderHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "OrderHistory",
      },
    ],
    addresses: {
      type: [addressesSchema],
      default: [],
    },
    // favoriteRestaurants: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Restaurant",
    //   },
    // ],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
