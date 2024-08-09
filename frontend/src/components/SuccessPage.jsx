import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../contexts/BasketContext";
import DeliveryTracker from "./DeliveryTracker";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { DataContext } from "../contexts/DataContext";

import "../style/SuccessPage.css";

function SuccessPage() {
  const { deliveryOption, totalSum, totalSumPurchasedItems, basket, purchasedItems, completePurchase, setOrderId } =
    useContext(BasketContext);
  const { sessionId, loggedInUser } = useContext(DataContext);
  const [restaurantName, setRestaurantName] = useState(JSON.parse(localStorage.getItem("restaurantName") || ""));
  const [restaurantId, setRestaurantId] = useState(JSON.parse(localStorage.getItem("restaurantId") || ""));
  const [restaurantAddress, setRestaurantAddress] = useState(JSON.parse(localStorage.getItem("restaurantAddress")));
  const [newOrderId, setNewOrderId] = useState("");

  useEffect(() => {
    const getRestaurantName = JSON.parse(localStorage.getItem("restaurantName"));
    const getRestaurantId = JSON.parse(localStorage.getItem("restaurantId"));
    const getRestaurantAddress = JSON.parse(localStorage.getItem("restaurantAddress"));

    if (getRestaurantName) {
      setRestaurantName(getRestaurantName);
    }

    if (getRestaurantId) {
      setRestaurantId(getRestaurantId);
    }

    if (getRestaurantAddress) {
      setRestaurantAddress(getRestaurantAddress);
    }
  }, []);

  useEffect(() => {
    async function setOrder() {
      const settings = {
        body: JSON.stringify({ sessionId, basket, totalSum, deliveryOption, restaurantName, restaurantAddress }),
        headers: {
          "Content-Type": "application/JSON",
        },
        method: "POST",
      };

      try {
        const response = await fetch(`http://localhost:5002/create-checkout-session/setOrder`, settings);

        if (response.ok) {
          const { id } = await response.json();
          setNewOrderId(id);

          if (loggedInUser) {
            const settings = {
              body: JSON.stringify({ orderId: id }),
              method: "PATCH",
              headers: {
                "Content-Type": "application/JSON",
              },
            };
            const response = await fetch(
              `http://localhost:5002/create-checkout-session/setOrder/${loggedInUser.id}`,
              settings
            );
            if (response.ok) {
              await response.json();
            } else {
              const { error } = await response.json();
              throw new Error(error.message);
            }
          }
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    setOrder();
  }, [sessionId]);

  // useEffect(() => {
  //   async function setOrderDetails() {
  //     const settings = {
  //       body: JSON.stringify({ sessionId, basket, totalSum, deliveryOption, restaurantName }),
  //       headers: {
  //         "Content-Type": "application/JSON",
  //       },
  //       method: "POST",
  //     };

  //     try {
  //       const response = await fetch(
  //         `http://localhost:5002/create-checkout-session/setOrderDetails/${loggedInUser.id}`,
  //         settings
  //       );
  //       if (response.ok) {
  //         await response.json();
  //         completePurchase(); // Clear the basket and set purchasedItems
  //       } else {
  //         const { error } = await response.json();
  //         throw new Error(error.message);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   setOrderDetails();
  // }, [sessionId]);

  useEffect(() => {
    async function sendOrderToRestaurant() {
      const settings = {
        body: JSON.stringify({ sessionId, newOrderId }),
        headers: {
          "Content-Type": "application/JSON",
        },
        method: "POST",
      };

      try {
        const response = await fetch(
          `http://localhost:5002/create-checkout-session/send-to-restaurant/${restaurantId}`,
          settings
        );

        if (response.ok) {
          const { message, orderId } = await response.json();
          setOrderId(orderId);
          console.log(message);
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (newOrderId) {
      sendOrderToRestaurant();
    }
  }, [basket, deliveryOption, restaurantId, sessionId, totalSum, newOrderId]);

  useEffect(() => {
    completePurchase();
  }, []);

  return (
    <>
      <Navbar />
      <div className="successPage">
        <div className="success-card-container">
          <div className="success-card">
            <h1 className="success-title">Thank you! 🎉</h1>
            <h1 className="success-title">Order Successful.</h1>
            <p className="success-message">
              Your order will be {deliveryOption === "delivery" ? "delivered" : "ready for pickup"} soon.
            </p>
          </div>
          <div className="success-card-order-details">
            <h2>Order Details</h2>
            {purchasedItems.map((item) => (
              <p key={item._id}>
                {item.quantity} x {item.name}
              </p>
            ))}
            <p className="success-total">Total: €{totalSumPurchasedItems.toFixed(2)}</p>
          </div>
        </div>
        <div className="success-trackerContainer">
          <DeliveryTracker />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SuccessPage;
