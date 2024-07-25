import createHttpError from "http-errors";
import menus from "../menu.js";
import Restaurant from "../models/RestaurantModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import SearchedRestaurant from "../models/SearchedRestaurantsModel.js";

export async function getAllRestaurants(req, res, next) {
  try {
    const { search } = req.body;

    if (!search) {
      return next(createHttpError(400, "Search term is required"));
    }

    console.log(search);

    const splitSearch = search.toLowerCase().split(" ");
    const country = splitSearch[0];
    const allowedCities = ["leipzig", "berlin", "hannover", "düsseldorf"];
    const cityInSearch = allowedCities.find((city) => splitSearch.includes(city));

    if (!cityInSearch) {
      return next(createHttpError(400, "Search city should be Leipzig, Berlin, Hannover or Düsseldorf"));
    }

    // const includesRestaurantOrCuisine = splitSearch.includes("restaurants") || splitSearch.includes("cuisines");

    // if (!includesRestaurantOrCuisine) {
    //   return next(createHttpError(400, 'Search must include either "restaurants" or "cuisines"'));
    // }

    const restaurants = await Restaurant.find({});

    const filteredRestaurants = restaurants.filter((restaurant) => {
      const cityMatch = restaurant.basicInfo.address.city.toLowerCase() === cityInSearch;
      const cuisineMatch = restaurant.cuisine.some((cuisine) => cuisine.toLowerCase() === country.toLowerCase());
      const restaurantMatch = restaurant.restaurantType.some(
        (restaurant) => restaurant.toLowerCase() === country.toLowerCase()
      );
      return (cityMatch && cuisineMatch) || (cityMatch && restaurantMatch);
    });

    // console.log(filteredRestaurants.length);

    if (filteredRestaurants.length === 0) {
      return next(createHttpError(404, "We don't have any restaurant with your search query in our database"));
    }

    // Map filtered results to the SearchedRestaurant schema
    const searchedRestaurantsData = filteredRestaurants.map((restaurant) => ({
      basicInfo: restaurant.basicInfo,
      openAndCloseHours: restaurant.openAndCloseHours,
      cuisine: restaurant.cuisine,
      restaurantType: restaurant.restaurantType,
      menu: restaurant.menu,
      digitalPresence: restaurant.digitalPresence,
      promotionalInfo: restaurant.promotionalInfo,
    }));

    // Save filtered results to the database
    await SearchedRestaurant.deleteMany({});
    await SearchedRestaurant.create(searchedRestaurantsData);

    res.status(200).json(filteredRestaurants);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export async function getSearchedRestaurants(req, res, next) {
  try {
    const restaurants = await SearchedRestaurant.find();

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

export async function updateRestaurant(req, res, next) {
  const { id, section } = req.params;
  const updateData = req.body[section];

  if (!updateData) {
    return next(createHttpError(400, "No update data provided"));
  }

  // Function to remove all _id fields from an object
  const removeIds = (obj) => {
    if (Array.isArray(obj)) {
      obj.forEach(removeIds);
    } else if (obj && typeof obj === "object") {
      delete obj._id;
      Object.keys(obj).forEach((key) => removeIds(obj[key]));
    }
  };

  removeIds(updateData);

  let update = {};
  switch (section) {
    case "basicInfo":
      update = { basicInfo: updateData };
      break;
    case "contact":
      update = { "basicInfo.contact": updateData };
      break;
    case "address":
      update = { "basicInfo.address": updateData };
      break;
    case "digitalPresence":
      update = { digitalPresence: updateData };
      break;
    case "openingHours":
      update = { openAndCloseHours: updateData };
      break;
    default:
      return next(createHttpError(400, "Invalid Section"));
  }

  console.log(update);

  try {
    const options = {
      new: true,
      runValidators: true,
    };
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, { $set: update }, options);

    if (!updatedRestaurant) {
      return next(createHttpError(404, "Restaurant not found"));
    }

    res.status(200).json(updatedRestaurant);
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error updating restaurant"));
  }
}
