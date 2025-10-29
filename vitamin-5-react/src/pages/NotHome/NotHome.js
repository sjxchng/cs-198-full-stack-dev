import React, { useContext, useEffect, useState } from "react";
import "./NotHome.css";
import { CounterContext } from "../../context/CounterContext";

function NotHome() {
  const { count, increase, decrease, setCount } = useContext(CounterContext);

  const [showPassedFive, setShowPassedFive] = useState(false);

  // don't allow negative
  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
  }, [count, setCount]);

  // show "You passed 5!" when >= 5
  useEffect(() => {
    if (count >= 5) {
      setShowPassedFive(true);
    } else {
      setShowPassedFive(false);
    }
  }, [count]);

  return (
    <div className="page">
      <h1>Not Home Page</h1>

      <div className="counter-section">
        <div className="counter-display">Counter: {count}</div>

        {showPassedFive && (
          <div className="passed-five-msg">You passed 5!</div>
        )}

        <div className="button-row">
          <button onClick={increase} className="counter-btn">
            Increase
          </button>
          <button onClick={decrease} className="counter-btn">
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotHome;