import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";

import "../style/OrderHistory.css";

function OrderHistory() {
  const { userOrderHistory, getOrderHistory, loggedInUser } = useContext(DataContext);

  useEffect(() => {
    if (loggedInUser) {
      getOrderHistory();
    }
  }, [loggedInUser]);

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
  console.log(loggedInUser);

  return (
    <>
      <div className="order-history-container">
        {userOrderHistory.length === 0 ? (
          <h2 className="no-history-info"> You have no order history at the moment</h2>
        ) : (
          <>
            {userOrderHistory.map((order) => {
              return (
                <div key={order._id} className="order">
                  <div className="restaurant-name-container">
                    <h2>{order.restaurantName}</h2>
                    <div>{order.restaurantId}</div>
                  </div>
                  <h3>Items</h3>
                  <div className="items-container">
                    {order.items.map((item) => {
                      return (
                        <div key={item._id} className="item">
                          <p>{item.itemName}</p>
                          <div className="calculations">
                            <p>€{item.price}</p>
                            <p>x{item.quantity}</p>
                            <p>€{item.price * item.quantity}</p>
                          </div>
                        </div>
                      );
                    })}
                    <div className="total-sum">
                      <p>Total Sum</p>
                      <p>€{order.totalSum}</p>
                    </div>
                  </div>
                  <div>
                    <h3>Payment Details</h3>
                    <div className="payment-details">
                      <div className="payment-method">
                        <p>Payment Method</p>
                        <p>{order.paymentDetails.paymentMethod}</p>
                      </div>
                      <div className="charged-amount">
                        <p>Charged Amount</p>
                        <p>€{order.paymentDetails.chargedAmount}</p>
                      </div>
                    </div>
                    <h3>Additional Order Information</h3>
                    <div className="additional-info">
                      <div className="order-type">
                        <p>Order Type</p>
                        <p>{order.additionalInfo.orderType}</p>
                      </div>
                      <div className="order-status">
                        <p>Order Status</p>
                        <p>{order.additionalInfo.orderStatus}</p>
                      </div>
                      <div className="order-date">
                        <p>Order Date</p>
                        <p>{order.createdAt.slice(0, 10)}</p>
                      </div>
                      <div className="order-time">
                        <p>Order Time</p>
                        <p>{order.createdAt.slice(11, 16)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default OrderHistory;
