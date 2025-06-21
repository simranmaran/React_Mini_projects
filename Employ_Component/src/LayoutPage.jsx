// LayoutPage.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';

const LayoutPage = () => {
  return (
    <>
      <NavbarLinks />
      <hr />
      <Outlet />
    </>
  );
};

export default LayoutPage;