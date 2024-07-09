import React, { useState, useEffect } from 'react';
const stages = [
  { status: 'Restaurant Accepted', duration: 5000 },  // 5 seconds
  { status: 'Preparation', duration: 10000 },         // 10 seconds
  { status: 'Ready to be Delivered', duration: 3000 }, // 3 seconds
  { status: 'On Your Way', duration: 7000 },          // 7 seconds
  { status: 'At Your Door', duration: 2000 }          // 2 seconds
];
const DeliveryTracker = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  useEffect(() => {
    if (currentStage < stages.length) {
      const timer = setTimeout(() => {
        setTimeElapsed(prev => prev + stages[currentStage].duration);
        setCurrentStage(prev => prev + 1);
      }, stages[currentStage].duration);
      return () => clearTimeout(timer);
    }
  }, [currentStage]);
  return (
    <div>
      <h1>Delivery Tracker</h1>
      {currentStage < stages.length ? (
        <div>
          <h2>Current Stage: {stages[currentStage].status}</h2>
          <p>Time elapsed: {timeElapsed / 1000} seconds</p>
        </div>
      ) : (
        <div>
          <h2>Delivery Completed!</h2>
          <p>Total time elapsed: {timeElapsed / 1000} seconds</p>
        </div>
      )}
    </div>
  );
};
export default DeliveryTracker;