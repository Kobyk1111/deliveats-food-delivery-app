import { DataContext } from "../contexts/DataContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAward } from "@fortawesome/free-solid-svg-icons";

import "../style/SearchResults.css";

// function SearchResults() {
//   const { restaurants, getSearchedRestaurants, setRestaurant } =
//     useContext(DataContext);
//   const navigate = useNavigate();

//   console.log(restaurants);

//   useEffect(() => {
//     getSearchedRestaurants();
//   }, []);

//   // function getPriceLevel(priceLevel) {
//   //   return priceLevel ? `$`.repeat(priceLevel) : null;
//   // }

//   // function isRestaurantOpen(isOpen) {
//   //   return isOpen ? "Open now" : "Restaurant is closed";
//   // }

//   // function showRating(rating) {
//   //   return rating ? `⭐️`.repeat(rating) : null;
//   // }

//   function handleCardClick(id) {
//     const selectedRestaurant = restaurants.find(
//       (restaurant) => restaurant._id === id
//     );
//     setRestaurant(selectedRestaurant);
//     navigate(`/restaurant/${id}`);
//   }

//   // Function to get today's open hours
//   const getTodayHours = (openAndCloseHours) => {
//     const today = new Date()
//       .toLocaleString("en-us", { weekday: "long" })
//       .toLowerCase();
//     return openAndCloseHours[today];
//   };

//   // return (
//   //   <div className="search-results-page">
//   //     <Navbar />

//   //     <Searchbar className="results-searchbar" />

//   //     <div className="card-results-container">
//   //       {restaurants.map((restaurant) => {
//   //         {
//   //           const todayHours = getTodayHours(restaurant.openAndCloseHours);

//   //           /* const openStatus = isRestaurantOpen(restaurant.isOpen); */
//   //         }
//   //         return (
//   //           <div
//   //             key={restaurant._id}
//   //             className="card-results"
//   //             onClick={() => handleCardClick(restaurant._id)}
//   //           >
//   //             {" "}
//   //             <div className="restaurant-image">
//   //               <img
//   //                 src="https://img.freepik.com/free-vector/beautiful-vintage-restaurant-facade_23-2147635517.jpg?t=st=1722937567~exp=1722941167~hmac=bfc674eac2d353dc0d787456c3b7e6578591625bba4f1991e05273a11f8cef0e&w=1060"
//   //                 alt=""
//   //                 width={100}
//   //               />
//   //             </div>
//   //             <div className="restaurant-details">
//   //               <p className="card-title-results">
//   //                 {restaurant.basicInfo.businessName}
//   //               </p>
//   //               <p>
//   //                 {restaurant.basicInfo.address.street},{" "}
//   //                 {restaurant.basicInfo.address.postalCode},{" "}
//   //                 {restaurant.basicInfo.address.city}
//   //               </p>
//   //               <div className="details-container">
//   //                 {/* <div className="rating-container">
//   //                 <p className="rating">
//   //                   {showRating(restaurant.rating)} {restaurant.rating} ({restaurant.userRatings})
//   //                 </p>
//   //               </div> */}
//   //                 {/* {restaurant.price_level && <p className="price-level">{getPriceLevel(restaurant.price_level)}</p>} */}
//   //                 {/* <p className={`open-status ${restaurant.isOpen ? "open" : "closed"}`}>{openStatus}</p> */}
//   //               </div>
//   //               <div className="search-result-open-hours">
//   //                 {/* <small>Monday: {restaurant.openAndCloseHours.monday}</small>
//   //                 <small>Tuesday: {restaurant.openAndCloseHours.tuesday}</small>
//   //                 <small>
//   //                   Wednesday: {restaurant.openAndCloseHours.wednesday}
//   //                 </small>
//   //                 <small>
//   //                   Thursday: {restaurant.openAndCloseHours.thursday}
//   //                 </small>
//   //                 <small>Friday: {restaurant.openAndCloseHours.friday}</small>
//   //                 <small>
//   //                   Saturday {restaurant.openAndCloseHours.saturday}:
//   //                 </small>
//   //                 <small>Sundday:{restaurant.openAndCloseHours.sunday}</small> */}
//   //                 <small>Today: {todayHours}</small>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         );
//   //       })}
//   //     </div>
//   //     <Footer />
//   //   </div>
//   // );
//   return (
//     <div className="search-results-page">
//       <Navbar />

//       <Searchbar className="results-searchbar" />

//       <div className="cards-results-container">
//         {restaurants.map((restaurant) => {
//           const todayHours = getTodayHours(restaurant.openAndCloseHours);
//           return (
//             <div
//               key={restaurant._id}
//               className="card-results"
//               onClick={() => handleCardClick(restaurant._id)}
//             >
//               <div className="restaurant-image">
//                 <img
//                   src="https://img.freepik.com/free-vector/beautiful-vintage-restaurant-facade_23-2147635517.jpg?t=st=1722937567~exp=1722941167~hmac=bfc674eac2d353dc0d787456c3b7e6578591625bba4f1991e05273a11f8cef0e&w=1060"
//                   alt=""
//                   width={100}
//                 />
//               </div>
//               <div>
//                 <h1>{restaurant.basicInfo.businessName}</h1>
//                 <div className="restaurant-card">
//                   <div className="restaurant-details">
//                     <p>
//                       {restaurant.basicInfo.address.street},{" "}
//                       {restaurant.basicInfo.address.postalCode},{" "}
//                       {restaurant.basicInfo.address.city}
//                     </p>
//                     <small>Today: {todayHours}</small>
//                   </div>
//                   <div className="restaurant-currentOffers">
//                     <div>Offers</div>
//                     <ul>
//                       {restaurant.promotionalInfo.currentOffers.map(
//                         (offer, index) => (
//                           <li key={index}>{offer.category}</li>
//                         )
//                       )}
//                     </ul>
//                     {/* <ul>20 menu</ul> */}
//                   </div>

//                   {loyaltyProgram && loyaltyProgram.trim() !== "" && (
//                     <div className="restaurant-loyaltyPrograms">
//                       <div>Loyalty Programs:</div>
//                       <div>{loyaltyProgram}</div>
//                     </div>
//                   )}

//                   {/* <div className="restaurant-loyaltyPrograms">
//                     {" "}
//                     Points Program: {restaurant.promotionalInfo.loyaltyPrograms}
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <Footer />
//     </div>
//   );
// }
function SearchResults() {
  const { restaurants, getSearchedRestaurants, setRestaurant } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    getSearchedRestaurants();
  }, []);

  function handleCardClick(id) {
    const selectedRestaurant = restaurants.find((restaurant) => restaurant._id === id);
    setRestaurant(selectedRestaurant);
    navigate(`/restaurant/${id}`);
  }

  const getTodayHours = (openAndCloseHours) => {
    const today = new Date().toLocaleString("en-us", { weekday: "long" }).toLowerCase();
    return openAndCloseHours[today];
  };

  console.log(restaurants);
  return (
    <div className="search-results-page">
      <Navbar />

      <Searchbar className="results-searchbar" />

      <div className="cards-results-container">
        {restaurants.map((restaurant) => {
          const todayHours = getTodayHours(restaurant.openAndCloseHours);
          // const loyaltyProgram = restaurant.promotionalInfo.loyaltyPrograms;

          return (
            <div key={restaurant._id} className="card-results" onClick={() => handleCardClick(restaurant._id)}>
              {" "}
              <div className="restaurant-image">
                <img
                  src={
                    restaurant.basicInfo.coverImage.startsWith("uploads")
                      ? `http://localhost:5002/${restaurant.basicInfo.coverImage}`
                      : restaurant.basicInfo.coverImage
                  }
                  alt=""
                  // width={100}
                />
              </div>
              <div className="restaurant-info">
                <h1>{restaurant.basicInfo.businessName}</h1>
                <div className="restaurant-card">
                  <div className="restaurant-details">
                    <p>
                      {restaurant.basicInfo.address.street}, {restaurant.basicInfo.address.postalCode},{" "}
                      {restaurant.basicInfo.address.city}
                    </p>
                    <small>Today: {todayHours}</small>
                  </div>

                  <div className="restaurant-currentOffers">
                    <div>Offers</div>
                    <ul>
                      {restaurant.promotionalInfo.currentOffers.map((offer, index) => {
                        return <li key={index}>{offer.category}</li>;
                      })}
                    </ul>
                  </div>

                  {/* Conditional rendering of the text "Loyalty Programs" */}
                  {/* {loyaltyProgram && loyaltyProgram.trim() !== "" && (
                    <div className="restaurant-loyaltyPrograms">
                      Loyalty Program{"   "}
                      <FontAwesomeIcon
                        icon={faAward}
                        style={{ color: "#FFD43B" }}
                      />
                    </div>
                  )} */}
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
