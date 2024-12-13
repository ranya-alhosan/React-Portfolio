import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
      <div className="container">
        <a className="logo" href="#">
          Ranya
        </a>
        <ul className={`nav ${isMenuOpen ? "show" : ""}`}>
          <li className="item">
            <a className="link" href="/about">
              About
            </a>
          </li>

          <li className="item">
            <a className="link" href="/skills">
              Skills
            </a>
          </li>
          <li className="item">
            <a className="link" href="/experience">
              Experience
            </a>
          </li>
          <li className="item">
            <a className="link" href="/project">
              My Project
            </a>
          </li>
          <li className="item">
            <a className="link" href="/contact">
              Contact me
            </a>
          </li>
        </ul>
        <a
          href="javascript:void(0)"
          id="nav-toggle"
          className={`hamburger hamburger--elastic ${isMenuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
