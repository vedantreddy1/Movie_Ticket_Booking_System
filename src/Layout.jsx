import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Header&Footer/Navbar";
import Footer from './Header&Footer/Footer';
import FAQ from './Header&Footer/FAQ';

const Layout = () => {
  return (
    <>
    
      <Navbar />
      <Outlet />
      <FAQ/>
      <Footer/>
    </>
  );
}

export default Layout
