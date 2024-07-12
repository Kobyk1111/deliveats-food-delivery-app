import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const stages = [
  { status: "Payment confirmed! 🎉", duration: 1000 }, // 1 second
  { status: "Order received by the restaurant ✅", duration: 5000 }, // 5 seconds
  { status: "A human being is preparing your food 🧑‍🍳", duration: 10000 }, // 10 seconds
  { status: "Food is ready to go! 🍽", duration: 3000 }, // 3 seconds
  { status: "Your order is on its way 🚗", duration: 7000 }, // 7 seconds
  { status: "Knock, knock! Your order is at the door 🛎", duration: 2000 }, // 2 seconds
];

const DeliveryTracker = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [completedStages, setCompletedStages] = useState([]);
  const navigate = useNavigate();

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
        setCurrentStage((prev) => prev + 1);
      }, stages[currentStage].duration);
      return () => clearTimeout(timer);
    } else {
      // After delivery is completed, navigate to success page
      navigate("/success");
    }
  }, [currentStage, navigate]);

  const handleBackToMainPage = () => {
    navigate("/");
  };

  return (
    <div className="tracking-container">
      <h2>Track Your Order</h2>

      <div className="timeline">
        {completedStages.map((stage, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <p className="timeline-status">{stage.status}</p>
              <p className="timeline-timestamp">{stage.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="current-stage">
        {currentStage < stages.length ? (
          <div className="current-stage-content">
            <p>Checking next step: {stages[currentStage].status}</p>
          </div>
        ) : (
          <div className="current-stage-content">
            <p>Delivery Completed!</p>
            <button onClick={handleBackToMainPage} className="back-to-main-button">
              Back to main page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryTracker;
