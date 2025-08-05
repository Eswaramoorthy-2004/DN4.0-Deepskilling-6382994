// src/UserPage.js
import React from "react";

function UserPage() {
  const handleBooking = (flight) => {
    alert(`✅ Successfully booked: ${flight}`);
  };

  return (
    <div className="card">
      <h2>Welcome, User! 👤</h2>
      <p>Choose a flight to book:</p>
      <ul>
        <li>
          ✈️ Flight 101: Chennai ➡️ Delhi -
          <button className="btn book" onClick={() => handleBooking("Chennai to Delhi")}>
            Book Now
          </button>
        </li>
        <li>
          ✈️ Flight 202: Mumbai ➡️ Bangalore -
          <button className="btn book" onClick={() => handleBooking("Mumbai to Bangalore")}>
            Book Now
          </button>
        </li>
        <li>
          ✈️ Flight 303: Kolkata ➡️ Hyderabad -
          <button className="btn book" onClick={() => handleBooking("Kolkata to Hyderabad")}>
            Book Now
          </button>
        </li>
      </ul>
    </div>
  );
}

export default UserPage;
