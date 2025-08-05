// src/App.js
import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  // Multiple actions for increment
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  const sayWelcome = (message) => {
    alert(`Message: ${message}`);
  };

  const handleClick = (e) => {
    alert("I was clicked (Synthetic Event)");
    console.log(e); // Synthetic Event object
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>React Event Handling Demo</h2>

      <h3>Counter: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <hr />

      <button onClick={() => sayWelcome("Welcome to the eventexamplesapp!")}>
        Say Welcome
      </button>

      <hr />

      <button onClick={handleClick}>Synthetic Event</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
