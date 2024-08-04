import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Ensure the path is correct
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Blog from './Blog';
import Admin from './Admin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;
