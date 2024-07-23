import createHttpError from "http-errors";
import menus from "../menu.js";
import Restaurant from "../models/RestaurantModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function getAllRestaurants(req, res, next) {
  const { search } = req.body;

  // const search = "Brazilian food in leipzig";

  const splitSearch = search.toLowerCase().split(" ");

  const filteredArray = menus.filter((menu) => splitSearch.includes(menu.cuisine.toLowerCase()));

  function getRandomMenu() {
    const randomIndex = Math.floor(Math.random() * filteredArray.length);
    return filteredArray[randomIndex];
  }

  const API_KEY = process.env.GOOGLE_API_KEY;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search}&type=restaurant&key=${API_KEY}`
    );

    if (response.ok) {
      const data = await response.json();

      const restaurantsData = data.results.map((restaurant) => {
        return {
          name: restaurant.name,
          address: restaurant.formatted_address,
          rating: restaurant.rating,
          userRatings: restaurant.user_ratings_total,
          isOpen: restaurant.opening_hours ? restaurant.opening_hours.open_now : false,
          price_level: restaurant.price_level || 0,
          favorited: false,
          menu: getRandomMenu(),
        };
      });

      try {
        await Restaurant.deleteMany({});
        const allRestaurants = await Restaurant.create(restaurantsData);
        res.json(allRestaurants);
      } catch (error) {
        return next(createHttpError(400, "Restaurants could not be created"));
      }
    } else {
      const error = await response.json();
      return next(createHttpError(400, error.error_message || "Restaurants could not be fetched"));
    }
  } catch (error) {
    next(createHttpError(500, "Please search for cuisines or restaurants in a city"));
  }
}

export async function getSearchedRestaurants(req, res, next) {
  try {
    const restaurants = await Restaurant.find();

    if (restaurants) {
      res.json(restaurants);
    } else {
      return next(createHttpError(404, "No restaurants in database"));
    }
  } catch (error) {
    next(createHttpError(500, "Server error getting restaurants"));
  }
}

export async function registerRestaurant(req, res, next) {
  console.log(req.body);
  const email = req.body.basicInfo.contact.email;
  const phoneNumber = req.body.basicInfo.contact.phoneNumber;
  const password = req.body.basicInfo.password;

  // console.log(email, phoneNumber);

  try {
    const foundRestaurant = await Restaurant.findOne({
      "basicInfo.contact.email": email,
      "basicInfo.contact.phoneNumber": phoneNumber,
    });

    if (foundRestaurant) {
      return next(createHttpError(409, "Restaurant with email and phone number already exists."));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newRestaurant = await Restaurant.create({
      ...req.body,
      basicInfo: {
        ...req.body.basicInfo,
        password: hashedPassword,
      },
    });

    const restaurantAccessToken = jwt.sign({ id: newRestaurant._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
    const restaurantRefreshToken = jwt.sign({ id: newRestaurant._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

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

    res.cookie("accessCookie", restaurantAccessToken, accessOptions);
    res.cookie("refreshCookie", restaurantRefreshToken, refreshOptions);

    res.json({ message: "Restaurant has been created successfully", restaurant: newRestaurant });
  } catch (error) {
    console.error(error);
    next(createHttpError(500, "Server error creating a restaurant."));
  }
}

export async function loginRestaurant(req, res, next) {
  const { email, password } = req.body;

  try {
    const foundRestaurant = await Restaurant.findOne({ "basicInfo.contact.email": email });

    if (!foundRestaurant) {
      return next(createHttpError(404, "No restaurant found"));
    }

    const matchPasswords = await bcrypt.compare(password, foundRestaurant.basicInfo.password);

    if (!matchPasswords) {
      return next(createHttpError(400, "Wrong Password, please try again!"));
    }

    const restaurantAccessToken = jwt.sign({ id: foundRestaurant._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "15m",
    });
    const restaurantRefreshToken = jwt.sign({ id: foundRestaurant._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

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

    res.cookie("accessCookie", restaurantAccessToken, accessOptions);
    res.cookie("refreshCookie", restaurantRefreshToken, refreshOptions);

    res.json({ message: "Logging in successful", restaurant: foundRestaurant });
  } catch (error) {
    console.error(error);
    next(createHttpError(500, "Server error logging in."));
  }
}
