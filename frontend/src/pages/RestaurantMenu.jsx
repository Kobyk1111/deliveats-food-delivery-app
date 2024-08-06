import { useCallback, useContext, useEffect /* useState */ } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { BasketContext } from "../contexts/BasketContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Basket from "../components/Basket";
// import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";

import "../style/RestaurantMenu.css";

function RestaurantMenu() {
  const { id } = useParams();
  const {
    restaurants,
    getSearchedRestaurants,
    restaurant,
    setRestaurant,
    loggedInUser,
  } = useContext(DataContext);
  const { addItemToBasket } = useContext(BasketContext);
  // const [isFavorited, setIsFavorited] = useState(false);
  // const [restaurant, setRestaurant] = useState(null);

  console.log(restaurant);

  // const restaurant = restaurants.find((r) => r._id === id);

  const fetchRestaurants = useCallback(async () => {
    await getSearchedRestaurants();
  }, []);

  // useEffect(() => {
  //   fetchRestaurants();
  // }, [fetchRestaurants]);

  useEffect(() => {
    if (!restaurants.length) {
      fetchRestaurants();
    }
  }, [fetchRestaurants, restaurants.length]);

  // useEffect(() => {
  //   const foundRestaurant = restaurants.find((r) => r._id === id);
  //   setRestaurant(foundRestaurant);

  //   // if (foundRestaurant && loggedInUser) {
  //   //   setIsFavorited(loggedInUser.favoriteRestaurants?.includes(id));
  //   // }
  // }, [id, restaurants]);

  useEffect(() => {
    if (!restaurant || restaurant._id !== id) {
      const foundRestaurant = restaurants.find((r) => r._id === id);
      if (foundRestaurant) {
        setRestaurant(foundRestaurant);
      } else {
        fetchRestaurants().then(() => {
          const newRestaurant = restaurants.find((r) => r._id === id);
          setRestaurant(newRestaurant);
        });
      }
    }
  }, [id, restaurant, restaurants, fetchRestaurants, setRestaurant]);

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
            <div className="restaurant-info">
              <div>
                <h1 className="restaurant-name">
                  {restaurant.basicInfo.businessName}
                </h1>
                <p className="restaurant-address">
                  {restaurant.basicInfo.address.street},{" "}
                  {restaurant.basicInfo.address.postalCode},{" "}
                  {restaurant.basicInfo.address.city}
                </p>
              </div>
              <div>
                <img
                  src="https://img.freepik.com/premium-vector/vector-design-dinner-icon-style_1134108-28645.jpg?w=1060"
                  alt=""
                  width={80}
                />
              </div>
            </div>
            <div className="menu-items">
              {restaurant?.menu?.map((item) => (
                <div key={item._id} className="menu-item-card">
                  <div className="item-info">
                    <h2>{item.category}</h2>
                    {item.items.map((food) => (
                      <div className="item-details" key={food._id}>
                        <img
                          src="https://img.freepik.com/free-vectortakeaway-packages-3d-vector-illustration-coffee-soda-cup-burger-fast-food-packs-from-restaurant-cartoon-style-isolated-white-background-fast-food-shop-menu-concept_778687-647.jpg?t=st=1722929708~exp=1722933308~hmac=69f1d3bbaaf8599aa23efb9000feb41a49ed194639a6708d5b43e0c1e14031fa&w=1060"
                          alt=""
                          width={100}
                        />

                        <div>
                          <p className="item-name">{food.name}</p>
                          <p className="item-description">{food.description}</p>
                          <p className="item-price">€{food.price}</p>
                        </div>
                        <button
                          className="add-button"
                          onClick={() => addItemToBasket(food)}
                        >
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                  {/* <div className="item-actions">
                    {item.items.map((food) => (
                      <>
                        <button className="add-button" onClick={() => addItemToBasket(food)}>
                          Add
                        </button>
                      </>
                    ))}
                  </div> */}
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
