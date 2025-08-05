// src/App.js
import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let authButton = isLoggedIn ? (
    <button className="btn logout" onClick={handleLogout}>
      Logout
    </button>
  ) : (
    <button className="btn login" onClick={handleLogin}>
      Login
    </button>
  );

  return (
    <div className="app-container">
      <h1>✈️ Ticket Booking App</h1>
      {authButton}
      <hr />
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
