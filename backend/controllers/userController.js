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

      const accessToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
      const refreshToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

      const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      };

      const accessOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 15,
      };

      const refreshOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 60 * 24,
      };

      res.cookie("accessCookie", accessToken, accessOptions);
      res.cookie("refreshCookie", refreshToken, refreshOptions);

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

      const accessToken = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
      const refreshToken = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

      const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      };

      const accessOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 15,
      };

      const refreshOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 60 * 24,
      };

      res.cookie("accessCookie", accessToken, accessOptions);
      res.cookie("refreshCookie", refreshToken, refreshOptions);

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

export async function checkAuthentication(req, res, next) {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return next(400, createHttpError("User not found, Authentication failed! Please login."));
    }

    res.json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    return next(createHttpError(500, "Authentication failed! Please login again."));
  }
}
