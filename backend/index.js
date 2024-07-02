import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import userRouter from "./routes/userRouter.js";
import searchRouter from "./routes/searchRouter.js";

try {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
  console.log("Database is connected!");
} catch (error) {
  console.log("Error connecting to the database", error);
}

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/search", searchRouter);

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(globalErrorHandler);
