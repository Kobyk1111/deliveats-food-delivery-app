import User from "../models/UserModel.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerUser(req, res, next) {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  try {
    const foundUser = await User.findOne({ firstName, lastName, email });

    if (!foundUser) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({ firstName, lastName, email, password: hashedPassword });

      res.status(201).json({
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      });
    } else {
      return next(createHttpError(409, "User already exists"));
    }
  } catch (error) {
    next(createHttpError(500, "Registration unsuccessful"));
  }
}

export async function loginUser(req, res, next) {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email });

    if (foundUser) {
      const matchPasswords = await bcrypt.compare(password, foundUser.password);

      if (!matchPasswords) {
        return next(createHttpError(400, "Wrong Password, please try again!"));
      }

      res.json({
        id: foundUser._id,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        email: foundUser.email,
      });
    } else {
      return next(createHttpError(404, "No user found"));
    }
  } catch (error) {
    next(createHttpError(500, "login unsuccessful"));
  }
}
