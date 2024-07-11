import { useState, useEffect, useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";

const deliveryStages = [
  { status: "Payment confirmed! 🎉", duration: 1000 },
  { status: "Order received by the restaurant. ✅", duration: 5000 },
  { status: "Food is being prepared.🧑‍🍳", duration: 10000 },
  { status: "Food is ready to go! 🍽", duration: 3000 },
  { status: "Your order is on its way. 🚗", duration: 7000 },
  { status: "Knock, knock! Your order is at the door. 🛎", duration: 2000 },
];

const pickupStages = [
  { status: "Payment confirmed! 🎉", duration: 1000 },
  { status: "Order received by the restaurant. ✅", duration: 5000 },
  { status: "Food is being prepared. 🧑‍🍳", duration: 10000 },
  { status: "Food is ready to go! 🍽", duration: 3000 },
  { status: "Your order is ready for pickup! 🛍️", duration: 3000 },
  {
    status: "You can now pick up your order at the counter 🏃",
    duration: 5000,
  },
];

function DeliveryTracker() {
  const { deliveryOption } = useContext(BasketContext);
  const stages = deliveryOption === "delivery" ? deliveryStages : pickupStages;

  const [currentStage, setCurrentStage] = useState(0);
  const [completedStages, setCompletedStages] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    if (currentStage < stages.length) {
      const timer = setTimeout(() => {
        const currentTime = new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
          month: "long",
          day: "numeric",
          year: "numeric",
        });

        setCompletedStages((prev) => [
          ...prev,
          { ...stages[currentStage], timestamp: currentTime },
        ]);
        setTimeElapsed((prev) => prev + stages[currentStage].duration);
        setCurrentStage((prev) => prev + 1);
      }, stages[currentStage].duration);
      return () => clearTimeout(timer);
    }
  }, [currentStage, stages]);

  return (
    <div className="tracking-container">
      <h2>Track Your Order</h2>

      <div className="timeline">
  
        {stages.map((stage, index) => (
          <div
            key={index}
            // className="timeline-item">

            className={`timeline-item ${
              completedStages.length > index ? "completed" : ""
            } ${currentStage === index ? "current" : ""}`}
          >
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <p className="timeline-status">{stage.status}</p>
              {/* <p className="timeline-timestamp">{stage.timestamp}</p> */}

              {completedStages.length > index && (
                <p className="timeline-timestamp">
                  {completedStages[index].timestamp}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {currentStage >= stages.length && (
        <div className="completion">
          <p>Delivery Completed!</p>
        </div>
      )}
    </div>
  );
}

export default DeliveryTracker;
