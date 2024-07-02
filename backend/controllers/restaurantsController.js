import createHttpError from "http-errors";

export async function getAllRestaurants(req, res, next) {
  const search = "Restaurants in leipzig";
  const API_KEY = process.env.GOOGLE_API_KEY;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search}&key=${API_KEY}`
    );

    if (response.ok) {
      const data = await response.json();

      console.log(data.results.length);

      res.json(data);
    } else {
      const error = await response.json();
      return next(createHttpError(400, error));
    }
  } catch (error) {
    next(createHttpError(500, "Server error"));
  }
}
