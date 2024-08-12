import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import "../style/Preferences.css";

function Preferences() {
  const { userOrderHistory } = useContext(DataContext);

  return (
    <>
      <p>Preferences</p>
      <div>
        <h3>Your favorites</h3>
        <div>work on this part later</div>
      </div>
      <div className="order-again-container">
        <h3>Order again</h3>
        <div className="order-history-container">
          {userOrderHistory?.length === 0 ? (
            <h2 className="no-history-info">
              {" "}
              You have no saved orders at the moment
            </h2>
          ) : (
            <>
              {userOrderHistory?.map((order) => {
                return (
                  <div key={order._id} className="order">
                    <div className="restaurant-name-container">
                      <h4>{order.restaurantName}</h4>
                    </div>
                    <div></div>
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
