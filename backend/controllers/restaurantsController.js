import createHttpError from "http-errors";
import menus from "../menu.js";
import { v4 as uuidv4 } from "uuid";

function getRandomMenu() {
  const randomIndex = Math.floor(Math.random() * menus.length);
  return menus[randomIndex];
}

export async function getAllRestaurants(req, res, next) {
  const { search } = req.body;

  // search = "Soup in berlin"
  // const search = "restaurants in Berlin";
  const API_KEY = process.env.GOOGLE_API_KEY;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=food${search}&type=restaurants&key=${API_KEY}`
    );

    if (response.ok) {
      const data = await response.json();

      const restaurantsData = data.results.map((restaurant) => {
        return {
          id: uuidv4(),
          name: restaurant.name,
          address: restaurant.formatted_address,
          rating: restaurant.rating,
          userRatings: restaurant.user_ratings_total,
          isOpen: restaurant.opening_hours.open_now,
          menu: getRandomMenu(),
        };
      });

      res.json(restaurantsData);
    } else {
      const error = await response.json();
      return next(createHttpError(400, error));
    }
  } catch (error) {
    next(createHttpError(500, "Please search for cuisines or restaurants in a city"));
  }
}
