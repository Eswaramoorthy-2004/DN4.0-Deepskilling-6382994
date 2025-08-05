// src/GuestPage.js
import React from "react";

function GuestPage() {
  return (
    <div className="card guest">
      <h2>Welcome, Guest! 👥</h2>
      <p>Browse available flights:</p>
      <ul>
        <li>✈️ Flight 101: Chennai ➡️ Delhi - 10:00 AM</li>
        <li>✈️ Flight 202: Mumbai ➡️ Bangalore - 12:30 PM</li>
        <li>✈️ Flight 303: Kolkata ➡️ Hyderabad - 3:45 PM</li>
      </ul>
      <p className="warning">⚠️ Please log in to book your tickets.</p>
    </div>
  );
}

export default GuestPage;
