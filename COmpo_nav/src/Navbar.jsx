import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    gap: '20px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    fontWeight: 'bold'
  };

  return (
    <div style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/faculty">Faculty</Link>
      <Link to="/council">Our Council</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
};

export default Navbar;
