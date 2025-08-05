import React from 'react';
import '../App.css';

function BlogDetails() {
  return (
    <div className="blog-container">
      <h2 className="blog-title">Understanding React Conditional Rendering</h2>
      <p className="blog-author">by Jane Doe</p>
      <p className="blog-content">
        React allows conditional rendering using if-else, ternary, logical &&, and element variables.
      </p>
    </div>
  );
}

export default BlogDetails;
