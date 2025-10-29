import React, { useContext } from "react";
import "./Home.css";
import { CounterContext } from "../../context/CounterContext";

function Home() {
  const { count } = useContext(CounterContext);

  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Shared counter value (from context): {count}</p>
    </div>
  );
}

export default Home;