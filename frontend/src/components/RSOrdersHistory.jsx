import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import "../style/RSOrdersHistory.css";

function RSOrdersHistory() {
  const { loggedInRestaurant, getRestaurantOrderHistory } = useContext(DataContext);

  useEffect(() => {
    getRestaurantOrderHistory();
  }, [loggedInRestaurant]);

  return (
    <div className="rs-orderHistory-container">
      {loggedInRestaurant.orderHistory.map((eachOrder) => {
        const date = new Date(eachOrder.date);
        const formattedDate = isNaN(date.getTime())
          ? "Invalid Date"
          : date.toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            });
        return (
          <div className="cards" key={eachOrder._id}>
            <p>
              <strong>Order ID:</strong> {eachOrder.order._id}
            </p>
            <p>
              <strong>Date:</strong> {formattedDate}
            </p>
            <p>
              <strong>Customer:</strong> {eachOrder.customerName}
            </p>
            <p>
              <strong>Address:</strong> {eachOrder.customerAddress}
            </p>
            <p>
              <strong>Items:</strong> {eachOrder.order.items?.map((item) => item.itemName).join(", ")}
            </p>
            <p>
              <strong>Payment:</strong> Confirmed
            </p>
            <p>
              <strong>Delivery Option:</strong> {eachOrder.order.additionalInfo?.orderType}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default RSOrdersHistory;
