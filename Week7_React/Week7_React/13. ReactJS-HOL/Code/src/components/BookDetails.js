import React from 'react';
import '../App.css';  // ✅ Go up one level to reach App.css in src/
 // Import styles if not already

function BookDetails() {
  return (
    <div className="card">
      <h2>Book Details</h2>
      <ul>
        <li><strong>Title:</strong> React Basics</li>
        <li><strong>Author:</strong> John Doe</li>
        <li><strong>Price:</strong> $29.99</li>
      </ul>
    </div>
  );
}

export default BookDetails;
