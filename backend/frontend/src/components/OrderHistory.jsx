import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import "../style/OrderHistory.css";

function OrderHistory() {
  const { userOrderHistory, setUserOrderHistory, loggedInUser, getUserOrderHistory } = useContext(DataContext);

  useEffect(() => {
    if (loggedInUser) {
      getUserOrderHistory();
    }
  }, [loggedInUser, setUserOrderHistory]);

  async function handleDeleteOrderHistory() {
    if (confirm("Are you sure you want to delete all orders from your order history?")) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/users/deleteOrderHistory/${loggedInUser.id}`, {
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
  }

  async function handleDeleteOrder(orderId) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/users/deleteOrder/${loggedInUser.id}/${orderId}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) {
        const { orderHistory } = await response.json();
        setUserOrderHistory(orderHistory);
        // Optionally notify user of successful deletion
        // For example: notifyUser("Order successfully deleted");
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Error deleting order:", error.message);
    }
  }

  return (
    <>
      <div className="order-history-container">
        {userOrderHistory?.length === 0 ? (
          <h2 className="no-history-info">You have no order history at the moment</h2>
        ) : (
          <>
            <button className="delete-history-button" onClick={handleDeleteOrderHistory}>
              Delete All
            </button>
            <div className="orders-container">
              {userOrderHistory?.map((order) => {
                const date = new Date(order.createdAt);
                const formattedDate = isNaN(date.getTime())
                  ? "Invalid Date"
                  : date.toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                      hour12: true,
                    });
                return (
                  <div key={order?._id} className="order">
                    <div className="restaurant-name-container">
                      <h2>{order?.restaurantName}</h2>
                    </div>
                    <p>{order?.restaurantAddress}</p>
                    <h3>Items</h3>
                    <div className="items-container">
                      {order?.items.map((item) => {
                        return (
                          <div key={item._id} className="item">
                            <p>{item.name}</p>
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
                          <p>{formattedDate}</p>
                        </div>
                        {/* <div className="order-time">
                          <p>Order Time</p>
                          <p>{order?.createdAt.slice(11, 16)}</p>
                        </div> */}
                      </div>
                    </div>
                    <button className="delete-order-button" onClick={() => handleDeleteOrder(order._id)}>
                      Delete Order
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default OrderHistory;
