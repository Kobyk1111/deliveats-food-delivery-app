import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import "../style/Preferences.css";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../contexts/BasketContext";

function Preferences() {
  const { userOrderHistory, loggedInUser, setRestaurant, getUserOrderHistory } = useContext(DataContext);
  const { /* isBasketModalOpen, */ setIsBasketModalOpen, setBasket /* setIsOrderAgain */ } = useContext(BasketContext);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      getUserOrderHistory();
    }
  }, [loggedInUser]);

  useEffect(() => {
    async function getFavorites() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/users/get-favorites/${loggedInUser.id}`);

        if (response.ok) {
          const data = await response.json();
          setFavorites(data);
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (loggedInUser) {
      getFavorites();
    }
  }, [loggedInUser]);

  console.log(favorites);

  async function handleCardClick(id) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/restaurants/get-favorite-restaurant/${id}`);

      if (response.ok) {
        const data = await response.json();
        setRestaurant(data);
        navigate(`/restaurant/${id}`);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function orderAgain(orderId) {
    console.log(orderId);
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/restaurants/restaurant-with-order/${orderId}`);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setRestaurant(data.restaurantInfo);
        setBasket(data.items);
        // setIsOrderAgain(true)

        setIsBasketModalOpen(true);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  console.log(userOrderHistory);

  return (
    <>
      {/* <p>Preferences</p> */}
      <div>
        <h3>Your favorites</h3>
        {favorites.length === 0 ? (
          <>
            <h2> You have no saved favorites at the moment</h2>
            <p>
              You’ll find your favorite restaurants and stores here. You can add favorites by tapping the heart icon.
            </p>
          </>
        ) : (
          <div className="favorites-container">
            {favorites.map((favorite) => {
              return (
                <div className="favorite-card" key={favorite._id} onClick={() => handleCardClick(favorite._id)}>
                  <div className="image-container">
                    <img
                      src={
                        favorite.basicInfo.coverImage.startsWith("uploads")
                          ? `${import.meta.env.VITE_API}/${favorite.basicInfo.coverImage}`
                          : favorite.basicInfo.coverImage
                      }
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <h2>{favorite.basicInfo.venueName}</h2>
                    <p>
                      {favorite.basicInfo.address.street}, {favorite.basicInfo.address.postalCode},{" "}
                      {favorite.basicInfo.address.city}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="order-again-container">
        <h3>Order again</h3>
        <div className="order-history-container">
          {userOrderHistory?.length === 0 ? (
            <>
              <h2> You have no saved orders at the moment</h2>
              <p>
                You can order again your favorite orders again by clicking on the order again button on an order card.
              </p>
            </>
          ) : (
            <>
              {userOrderHistory?.map((order) => {
                return (
                  <div key={order._id} className="order">
                    <div className="restaurant-name-container">
                      <h4>{order.restaurantName}</h4>
                    </div>
                    <button onClick={() => orderAgain(order._id)}>Order Again</button>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Preferences;
