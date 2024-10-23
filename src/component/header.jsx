import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="navbar" className="navbar">
      <div
        className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Conditionally render nav-items based on isMenuOpen */}
      <ul className={`nav-items ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </li>
        <li>
          <a href="#work">WORK</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#personalInfo">BLOG</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
