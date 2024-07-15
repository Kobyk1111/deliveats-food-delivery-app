import createHttpError from "http-errors";
import menus from "../menu.js";
import Restaurant from "../models/RestaurantModel.js";

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
