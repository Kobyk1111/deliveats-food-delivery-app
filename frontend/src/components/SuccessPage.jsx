import { useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";
import DeliveryTracker from "./DeliveryTracker";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SuccessPage() {
  const { deliveryOption, basket, totalSum } = useContext(BasketContext);
  // console.log(deliveryOption);

  return (
    <>
      <Navbar />
      <div className="successPage">
        <div className="card-container">
          <div className="card">
            <h1 className="title">Thank you! 🎉</h1>
            <h1 className="title">Order Successful.</h1>
            <p className="message">
              Your order will be{" "}
              {deliveryOption === "delivery" ? "delivered" : "ready for pickup"}{" "}
              soon.
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
