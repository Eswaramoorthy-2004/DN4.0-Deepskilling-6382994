// src/CurrencyConvertor.js
import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState(null);

  const handleSubmit = () => {
    const conversionRate = 0.011; // 1 INR = 0.011 EUR (example rate)
    setEuros((rupees * conversionRate).toFixed(2));
  };

  return (
    <div>
      <h3>Currency Converter: INR ➡️ EUR</h3>
      <input
        type="number"
        placeholder="Enter INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
        Convert
      </button>

      {euros && (
        <p style={{ marginTop: "10px" }}>
          💶 EUR: <strong>{euros}</strong>
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
