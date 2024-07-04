import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RestaurantMenu() {
  const { id } = useParams();
  const { restaurants } = useContext(DataContext);

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

  return (
    <>
      <Navbar />
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RestaurantMenu;
