import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import { Home } from './Pages/Home';
import About from './Pages/About';
import Faculty from './Pages/Faculty';
import Council from './Pages/Council';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/council" element={<Council />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
