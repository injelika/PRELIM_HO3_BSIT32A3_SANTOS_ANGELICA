import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-container">
      <footer className="custom-footer py-4">
        <div className="container text-center">
          <p>© 2025 by Santos, Angelica.</p>
          <nav>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/ToDoList">
                  To-Do List
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
