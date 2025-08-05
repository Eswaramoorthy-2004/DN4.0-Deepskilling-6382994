import React from 'react';
import './App.css';// App.js


import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="app-container">
      <h1 className="section-title">Welcome to Blogger App</h1>
      <div className="card-container">
        <BookDetails />
        <BlogDetails />
        <CourseDetails />
      </div>
    </div>
  );
}

export default App;
