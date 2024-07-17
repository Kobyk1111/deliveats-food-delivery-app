import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function OrderHistory() {
  const { userOrderHistory } = useContext(DataContext);
  console.log(userOrderHistory);
  return (
    <>
      <div>
        {userOrderHistory.length === 0 ? (
          <h2> You have no order history at the moment</h2>
        ) : (
          <div>
            {userOrderHistory.map((order) => {
              return (
                <div key={order._id}>
                  <h3>Restaurant Name: {order.restaurantName}</h3>
                  <h3>Items</h3>
                  <ul>
                    {order.items.map((item) => {
                      return <li key={item._id}>{item.itemName}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default OrderHistory;
