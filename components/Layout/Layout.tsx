import Head from 'next/head';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Cart from './Cart';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className='main bg-dark-blue-900'>{children}</main>
    </>
  );
};

export default Layout;
