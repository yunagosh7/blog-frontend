import React, { useState } from "react";
import { Navbar } from "../navbar";
import "./header.css";
import { Link } from "react-router-dom";
import { MenuIcon } from "../menuIcon";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <Link className="title-link" to={"/"}>
        <h1 className="page-title">Blog</h1>
      </Link>

      <button className="btn-menu-icon" onClick={toggleNavbar}>
        <MenuIcon />
      </button>

      <Navbar isActive={isActive} toggleNavbar={toggleNavbar} />
    </header>
  );
};
