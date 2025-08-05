import React from "react";
import officeImage from "./image.jpg";

function App() {
  const officeList = [
    { id: 1, name: "WorkSpace Hub", rent: 45000, address: "Chennai" },
    { id: 2, name: "Elite Offices", rent: 75000, address: "Bangalore" },
    { id: 3, name: "Startup Labs", rent: 58000, address: "Hyderabad" },
  ];

  const headingStyle = {
    textAlign: "center",
    color: "navy",
    margin: "20px",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={headingStyle}>Office Space Rental App</h1>

      <img
  src={officeImage}
  alt="Office space"
  style={{
    width: "100%",
    height: "300px",
    objectFit: "cover",
    marginBottom: "20px"
  }}
/>


      {officeList.map((office) => (
        <div
          key={office.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{office.name}</h3>
          <p>
            <strong>Rent:</strong>{" "}
            <span
              style={{
                color: office.rent < 60000 ? "red" : "green",
                fontWeight: "bold",
              }}
            >
              ₹{office.rent}
            </span>
          </p>
          <p>
            <strong>Address:</strong> {office.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
