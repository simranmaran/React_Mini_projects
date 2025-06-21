
// NavbarLinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLinks = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#2874F0', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', margin: '0 10px' }}>Home</Link>
      <Link to="/employee" style={{ color: '#fff', margin: '0 10px' }}>Employee</Link>
      <Link to="/insert" style={{ color: '#fff', margin: '0 10px' }}>Insert</Link>
      <Link to="/update" style={{ color: '#fff', margin: '0 10px' }}>Update</Link>
    </nav>
  );
};

export default NavbarLinks;
