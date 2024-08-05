import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function Preferences() {
  const { userOrderHistory } = useContext(DataContext);

  // useEffect(() => {
  //   async function getOrderHistory() {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:5002/create-checkout-session/getOrderHistory/${loggedInUser.id}`
  //       );

  //       if (response.ok) {
  //         const { orderHistory } = await response.json();
  //         setUserOrderHistory(orderHistory);
  //       } else {
  //         const { error } = await response.json();
  //         throw new Error(error.message);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }

  //   if (loggedInUser) {
  //     getOrderHistory();
  //   }
  // }, [loggedInUser, setUserOrderHistory]);

  return (
    <>
      <p>Preferences</p>
      <div>
        <h3>Your favorites</h3>
        <div>work on this part later</div>
      </div>
      <div>
        <h3>Order again</h3>
        <div className="order-history-container">
          {userOrderHistory.length === 0 ? (
            <h2 className="no-history-info"> You have no saved orders at the moment</h2>
          ) : (
            <>
              {userOrderHistory.map((order) => {
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
