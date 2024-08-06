import { DataContext } from "../contexts/DataContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";

import "../style/SearchResults.css";

function SearchResults() {
  const { restaurants, getSearchedRestaurants, setRestaurant } =
    useContext(DataContext);
  const navigate = useNavigate();

  console.log(restaurants);

  useEffect(() => {
    getSearchedRestaurants();
  }, []);

  // function getPriceLevel(priceLevel) {
  //   return priceLevel ? `$`.repeat(priceLevel) : null;
  // }

  // function isRestaurantOpen(isOpen) {
  //   return isOpen ? "Open now" : "Restaurant is closed";
  // }

  // function showRating(rating) {
  //   return rating ? `⭐️`.repeat(rating) : null;
  // }

  function handleCardClick(id) {
    const selectedRestaurant = restaurants.find(
      (restaurant) => restaurant._id === id
    );
    setRestaurant(selectedRestaurant);
    navigate(`/restaurant/${id}`);
  }

  return (
    <div className="search-results-page">
      <Navbar />

      <Searchbar className="results-searchbar" />

      <div className="card-results-container">
        {restaurants.map((restaurant) => {
          {
            /* const openStatus = isRestaurantOpen(restaurant.isOpen); */
          }
          return (
            <div
              key={restaurant._id}
              className="card-results"
              onClick={() => handleCardClick(restaurant._id)}
            >
              {" "}
              <div className="restaurant-image">
                <img
                  src="https://img.freepik.com/free-vector/beautiful-vintage-restaurant-facade_23-2147635517.jpg?t=st=1722937567~exp=1722941167~hmac=bfc674eac2d353dc0d787456c3b7e6578591625bba4f1991e05273a11f8cef0e&w=1060"
                  alt=""
                  width={100}
                />
              </div>
              <div className="restaurant-details">
                <p className="card-title-results">
                  {restaurant.basicInfo.businessName}
                </p>
                <p>
                  {restaurant.basicInfo.address.street},{" "}
                  {restaurant.basicInfo.address.postalCode},{" "}
                  {restaurant.basicInfo.address.city}
                </p>
                <div className="details-container">
                  {/* <div className="rating-container">
                  <p className="rating">
                    {showRating(restaurant.rating)} {restaurant.rating} ({restaurant.userRatings})
                  </p>
                </div> */}
                  {/* {restaurant.price_level && <p className="price-level">{getPriceLevel(restaurant.price_level)}</p>} */}
                  {/* <p className={`open-status ${restaurant.isOpen ? "open" : "closed"}`}>{openStatus}</p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default SearchResults;
