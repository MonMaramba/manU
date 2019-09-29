// Basic layout for all pages. Higher Order Component

import React from "react";
import Header from "../Components/Header_footer/Header";
import Footer from "../Components/Header_footer/Footer";

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children} // anything that gets passed in routes.js
      <Footer />
    </div>
  );
};

export default Layout;
