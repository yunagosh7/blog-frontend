import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { MenuIcon } from "../menuIcon";

export const Navbar = ({ isActive, toggleNavbar }) => {
  return (
    <nav className={`navbar ${isActive ? "active" : ""}`}>
      <div className="container-btn-menu">
        <button className="btn-menu-icon" onClick={toggleNavbar}>
          <MenuIcon />
        </button>
      </div>

      <div className="login-links">
        <Link className="link" to={"/login"}>
          Iniciar sesión
        </Link>
        <Link className="link" to={"/signup"}>
          Registrarse
        </Link>
      </div>
    </nav>
  );
};
