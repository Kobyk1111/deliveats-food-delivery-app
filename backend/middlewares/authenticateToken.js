import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import Restaurant from "../models/RestaurantModel.js";
import createHttpError from "http-errors";

export async function authenticateToken(req, res, next) {
  try {
    const { accessCookie, refreshCookie } = req.cookies;

    if (!accessCookie && !refreshCookie) {
      throw new Error("Authentication required. Please log in. Error from authenticate function");
    }

    let token = accessCookie;
    let isAccessToken = true;

    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const foundUser = await User.findById(id);

      if (!foundUser) {
        throw new Error("User not found");
      }

      req.user = foundUser;

      return next();
    } catch (error) {
      isAccessToken = false;
    }

    if (!isAccessToken && refreshCookie) {
      console.log("user access token expired");

      token = refreshCookie;
      const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const foundUser = await User.findById(id);

      if (!foundUser) {
        throw new Error("User not found");
      }

      const newAccessToken = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });

      const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 1000 * 60 * 15,
      };

      res.cookie("accessCookie", newAccessToken, cookieOptions);

      console.log("New user access token created");

      req.user = foundUser;

      return next();
    } else {
      throw new Error("Authentication required. Please log in. Error from authenticate function");
    }
  } catch (error) {
    next(createHttpError(401, error.message));
  }
}

export async function authenticateTokenOfRestaurant(req, res, next) {
  try {
    const { restaurantAccessCookie, restaurantRefreshCookie } = req.cookies;

    if (!restaurantAccessCookie && !restaurantRefreshCookie) {
      throw new Error("Authentication required. Please log in. Error from authenticate function");
    }

    let token = restaurantAccessCookie;
    let isAccessToken = true;

    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const foundRestaurant = await Restaurant.findById(id);

      if (!foundRestaurant) {
        throw new Error("Restaurant not found");
      }

      req.rest = foundRestaurant;

      return next();
    } catch (error) {
      isAccessToken = false;
    }

    if (!isAccessToken && restaurantRefreshCookie) {
      console.log("restaurant access token expired");

      token = restaurantRefreshCookie;
      const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const foundRestaurant = await Restaurant.findById(id);

      if (!foundRestaurant) {
        throw new Error("Restaurant not found");
      }

      const newAccessToken = jwt.sign({ id: foundRestaurant._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });

      const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 1000 * 60 * 15,
      };

      res.cookie("restaurantAccessCookie", newAccessToken, cookieOptions);

      console.log("New restaurant access token created");

      req.rest = foundRestaurant;

      return next();
    } else {
      throw new Error("Authentication required. Please log in. Error from authenticate function");
    }
  } catch (error) {
    next(createHttpError(401, error.message));
  }
}
