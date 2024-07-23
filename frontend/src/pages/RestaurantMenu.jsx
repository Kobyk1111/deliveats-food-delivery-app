import { useCallback, useContext, useEffect /* useState */ } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { BasketContext } from "../contexts/BasketContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Basket from "../components/Basket";
// import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";

import "../style/RestaurantMenu.css"

function RestaurantMenu() {
  const { id } = useParams();
  const { restaurants, getSearchedRestaurants, restaurant, setRestaurant, loggedInUser } = useContext(DataContext);
  const { addItemToBasket } = useContext(BasketContext);
  // const [isFavorited, setIsFavorited] = useState(false);
  // const [restaurant, setRestaurant] = useState(null);

  // console.log(restaurant);

  // const restaurant = restaurants.find((r) => r._id === id);

  const fetchRestaurants = useCallback(async () => {
    await getSearchedRestaurants();
  }, []);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  useEffect(() => {
    const foundRestaurant = restaurants.find((r) => r._id === id);
    setRestaurant(foundRestaurant);

    // if (foundRestaurant && loggedInUser) {
    //   setIsFavorited(loggedInUser.favoriteRestaurants?.includes(id));
    // }
  }, [id, restaurants]);

  if (!restaurant) {
    return (
      <>
        <Navbar />
        <div className="not-found">Restaurant not found</div>
        <Footer />
      </>
    );
  }

  // async function handleSetFavoriteRestaurant(id) {
  //   try {
  //     const settings = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/JSON",
  //       },
  //       // body: JSON.stringify({ isFavorited: !isFavorited }),
  //     };

  //     const response = await fetch(`http://localhost:5002/users/favorite/${loggedInUser.id}/${id}`, settings);

  //     if (response.ok) {
  //       setIsFavorited(!isFavorited);
  //       const { favoritedRestaurant } = await response.json();
  //       console.log(favoritedRestaurant);
  //       // setRestaurant(favoritedRestaurant);
  //     } else {
  //       const { error } = await response.json();
  //       throw new Error(error.message);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="main-content">
          <div className="menu-card">
            {loggedInUser ? (
              <div className="favorite-icon-container">
                {/* {isFavorited ? (
                  <FaHeart
                    size="3rem"
                    color="red"
                    // onClick={() => handleSetFavoriteRestaurant(restaurant._id)}
                    className="favorite-icon"
                  />
                ) : (
                  <FaRegHeart
                    className="favorite-icon"
                    size="3rem"
                    color="black"
                    // onClick={() => handleSetFavoriteRestaurant(restaurant._id)}
                  />
                )} */}
              </div>
            ) : null}
            <h1 className="restaurant-name">{restaurant.name}</h1>
            <p className="restaurant-address">{restaurant.address}</p>
            <div className="menu-items">
              {restaurant?.menu?.items?.map((item) => (
                <div key={item._id} className="menu-item-card">
                  <div className="item-info">
                    <p className="item-name">{item.name}</p>
                    <p className="item-description">{item.description}</p>
                  </div>
                  <div className="item-actions">
                    <p className="item-price">€{item.price}</p>
                    <button className="add-button" onClick={() => addItemToBasket(item)}>
                      Add
                    </button>
                    {/* <span>Quantity: {getItemQuantity(item.id)}</span> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Basket id={id} />
      </div>

      <Footer />
    </>
  );
}

export default RestaurantMenu;
