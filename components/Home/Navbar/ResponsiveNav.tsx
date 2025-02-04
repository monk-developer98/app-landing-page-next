"use client";
import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = React.useState(false);
  const handleNavShow = () => {
    setShowNav(true);
  };
  const handleNavHide = () => {
    setShowNav(false);
  };
  return (
    <div>
      <Nav openNav={handleNavShow} />
      <MobileNav showNav={showNav} closeNav={handleNavHide} />
    </div>
  );
};

export default ResponsiveNav;
