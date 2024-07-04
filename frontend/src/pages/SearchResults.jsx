import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";

function SearchResults() {
  const { restaurants } = useContext(DataContext);

  function getPriceLevel(priceLevel) {
    return priceLevel ? `$`.repeat(priceLevel) : null;
  }

  function isRestaurantOpen(isOpen) {
    return isOpen ? "Open now" : "Restaurant is closed";
  }

  function showRating(rating) {
    return rating ? `⭐️`.repeat(rating) : null;
  }

  console.log(restaurants);
  return (
    <>
      <Navbar />

      <Searchbar className="results-searchbar" />

      <div className="card-results-container">
        {restaurants.map((restaurant) => {
          const openStatus = isRestaurantOpen(restaurant.isOpen);
          return (
            <div key={restaurant.id} className="card-results">
              <p className="card-title-results">{restaurant.name}</p>
              <p>{restaurant.address}</p>
              <div className="details-container">
                <div className="rating-container">
                  <p className="rating">
                    {" "}
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
