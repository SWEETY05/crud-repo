import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg color-white navbar-dark bg-primary">
      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="  ">
            React User
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link " exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  AboutUs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  ContactUs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
