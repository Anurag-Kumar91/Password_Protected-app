

import { useState, useEffect } from 'react';


function LabPage() {
  const [remainingTime, setRemainingTime] = useState(600000); // 10 minutes in milliseconds
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (remainingTime <= 0) {
      setIsExiting(true);
    }
  }, [remainingTime]);

  useEffect(() => {
    let intervalId;
    if (!isExiting) {
      intervalId = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 1000);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isExiting]);

  const handleExitClick = () => {
    setIsExiting(true);
  };

  return (
    <div className="lab-page">
      <div className={`sliding-doors ${isExiting ? 'exiting' : ''}`}>
        <div className="left-door" />
        <div className="right-door" />
        <div className="lock" />
      </div>
      <div className="center-circle-container">
        <div className="center-circle rotating" />
        <div className="center-circle fading" />
      </div>
      <div className="remaining-time">Remaining time: {Math.floor(remainingTime / 1000)} seconds</div>
      <button className="exit-button" onClick={handleExitClick}>
        Exit
      </button>
    </div>
  );
}

export default LabPage;
