import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { BasketContext } from "../contexts/BasketContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Basket from "../components/Basket";


function RestaurantMenu() {
  const { id } = useParams();
  const { restaurants } = useContext(DataContext);
  const { basket, addItemToBasket } = useContext(BasketContext);

  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <>
        <Navbar />
        <div className="not-found">Restaurant not found</div>
        <Footer />
      </>
    );
  }

  const getItemQuantity = (itemId) => {
    const basketItem = basket.find((item) => item.id === itemId);
    return basketItem ? basketItem.quantity : 0;
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
      <div className="main-content">
      <div className="menu-card">
        <h1 className="restaurant-name">{restaurant.name}</h1>
        <p className="restaurant-address">{restaurant.address}</p>
        <div className="menu-items">
          {restaurant?.menu?.items?.map((item) => (
            <div key={item.id} className="menu-item-card">
              <div className="item-info">
                <p className="item-name">{item.name}</p>
                <p className="item-description">{item.description}</p>
              </div>
              <div className="item-actions">
                <p className="item-price">${item.price}</p>
                <button
                  className="add-button"
                  onClick={() => addItemToBasket(item)}
                >
                  Add
                </button>
                {/* <span>Quantity: {getItemQuantity(item.id)}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>
      <Basket />
    </div>

      <Footer />
    </>
  );
}

export default RestaurantMenu;
