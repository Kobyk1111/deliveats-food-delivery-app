import { useContext, useEffect } from "react";
import { BasketContext } from "../contexts/BasketContext";
import DeliveryTracker from "./DeliveryTracker";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { DataContext } from "../contexts/DataContext";

function SuccessPage() {
  const { deliveryOption, basket, totalSum } = useContext(BasketContext);

  const { sessionId, loggedInUser } = useContext(DataContext);

  console.log(sessionId);

  useEffect(() => {
    async function getOrderDetails() {
      const settings = {
        body: JSON.stringify({ sessionId, basket, totalSum }),
        headers: {
          "Content-Type": "application/JSON",
        },
        method: "POST",
      };

      try {
        const response = await fetch(
          `http://localhost:5002/create-checkout-session/getOrderDetails/${loggedInUser.id}`,
          settings
        );
        if (response.ok) {
          await response.json();
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getOrderDetails();
  }, [sessionId]);

  return (
    <>
      <Navbar />
      <div className="successPage">
        <div className="card-container">
          <div className="card">
            <h1 className="title">Thank you! 🎉</h1>
            <h1 className="title">Order Successful.</h1>
            <p className="message">
              Your order will be {deliveryOption === "delivery" ? "delivered" : "ready for pickup"} soon.
            </p>
          </div>
          <div className="card-order-details">
            <h2>Order Details</h2>
            {basket.map((item) => (
              <p key={item._id}>
                {item.quantity} x {item.name}
              </p>
            ))}
            <p className="total">Total: €{totalSum.toFixed(2)}</p>
          </div>
        </div>
        <div className="trackerContainer">
          <DeliveryTracker />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SuccessPage;
