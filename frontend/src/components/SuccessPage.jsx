import { useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";
import DeliveryTracker from "./DeliveryTracker";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SuccessPage() {
  const { deliveryOption } = useContext(BasketContext);
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
          <div className="card">
            <p>*** order details *** </p>
            <p>Restaurant Name*</p>
            <p>item* price*</p>
            <p>item* price*</p>
            <p>item* price*</p>
            <p>item* price*</p>
            <p>total*</p>
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
