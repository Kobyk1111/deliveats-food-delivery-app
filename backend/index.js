import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import userRouter from "./routes/userRouter.js";
import searchRouter from "./routes/searchRouter.js";
import checkoutRouter from "./routes/checkoutRouter.js";
import refreshTokenRouter from "./routes/refreshTokenRouter.js";
import logoutRouter from "./routes/logoutRouter.js";
import restaurantsRouter from "./routes/restaurantsRouter.js";

try {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
  console.log("Database is connected!");
} catch (error) {
  console.log("Error connecting to the database", error);
}

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/users", userRouter);
app.use("/search", searchRouter);
app.use("/create-checkout-session", checkoutRouter);
// app.use("/saveBasketAndDelivery");
app.use("/refresh-token", refreshTokenRouter);
app.use("/restaurants", restaurantsRouter);
app.use("/logout", logoutRouter);

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(globalErrorHandler);
