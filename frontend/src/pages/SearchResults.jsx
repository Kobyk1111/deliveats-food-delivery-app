import { DataContext } from "../contexts/DataContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";

import "../style/SearchResults.css";

function SearchResults() {
  const { restaurants, getSearchedRestaurants } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    getSearchedRestaurants();
  }, []);

  function getPriceLevel(priceLevel) {
    return priceLevel ? `$`.repeat(priceLevel) : null;
  }

  function isRestaurantOpen(isOpen) {
    return isOpen ? "Open now" : "Restaurant is closed";
  }

  function showRating(rating) {
    return rating ? `⭐️`.repeat(rating) : null;
  }

  function handleCardClick(id) {
    navigate(`/restaurant/${id}`);
  }

  return (
    <>
      <Navbar />

      <Searchbar className="results-searchbar" />

      <div className="card-results-container">
        {restaurants.map((restaurant) => {
          const openStatus = isRestaurantOpen(restaurant.isOpen);
          return (
            <div
              key={restaurant._id}
              className="card-results"
              onClick={() => handleCardClick(restaurant._id)}
            >
              <p className="card-title-results">{restaurant.name}</p>
              <p>{restaurant.address}</p>
              <div className="details-container">
                <div className="rating-container">
                  <p className="rating">
                    {showRating(restaurant.rating)} {restaurant.rating} (
                    {restaurant.userRatings})
                  </p>
                </div>
                {restaurant.price_level && (
                  <p className="price-level">
                    {getPriceLevel(restaurant.price_level)}
                  </p>
                )}
                <p
                  className={`open-status ${
                    restaurant.isOpen ? "open" : "closed"
                  }`}
                >
                  {openStatus}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default SearchResults;
