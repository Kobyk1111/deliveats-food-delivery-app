import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import "../style/OrderHistory.css";

function OrderHistory() {
  const { userOrderHistory, setUserOrderHistory, loggedInUser, getOrderHistory } = useContext(DataContext);

  useEffect(() => {
    if (loggedInUser) {
      getOrderHistory();
    }
  }, [loggedInUser, setUserOrderHistory]);

  async function handleDeleteOrderHistory() {
    try {
      const response = await fetch(`http://localhost:5002/users/deleteOrderHistory/${loggedInUser.id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        const { orderHistory } = await response.json();

        setUserOrderHistory(orderHistory);
        alert("Order history successfully deleted");
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
      <div className="order-history-container">
        <button className="delete-history-button" onClick={handleDeleteOrderHistory}>
          Delete All Orders from History
        </button>
        {userOrderHistory.length === 0 ? (
          <h2 className="no-history-info">You have no order history at the moment</h2>
        ) : (
          <>
            {userOrderHistory.map((order) => {
              return (
                <div key={order?._id} className="order">
                  <div className="restaurant-name-container">
                    <h2>{order?.restaurantName}</h2>
                  </div>
                  <h3>Items</h3>
                  <div className="items-container">
                    {order?.items.map((item) => {
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
                      <p>€{order?.totalSum}</p>
                    </div>
                  </div>
                  <div>
                    <h3>Payment Details</h3>
                    <div className="payment-details">
                      <div className="payment-method">
                        <p>Payment Method</p>
                        <p>{order?.paymentDetails.paymentMethod}</p>
                      </div>
                      <div className="charged-amount">
                        <p>Charged Amount</p>
                        <p>€{order?.paymentDetails.chargedAmount}</p>
                      </div>
                    </div>
                    <h3>Additional Order Information</h3>
                    <div className="additional-info">
                      <div className="order-type">
                        <p>Order Type</p>
                        <p>{order?.additionalInfo.orderType}</p>
                      </div>
                      <div className="order-status">
                        <p>Order Status</p>
                        <p>{order?.additionalInfo.orderStatus}</p>
                      </div>
                      <div className="order-date">
                        <p>Order Date</p>
                        <p>{order?.createdAt.slice(0, 10)}</p>
                      </div>
                      <div className="order-time">
                        <p>Order Time</p>
                        <p>{order?.createdAt.slice(11, 16)}</p>
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
