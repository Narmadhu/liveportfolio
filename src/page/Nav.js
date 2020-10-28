import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <header className="nav-scrolled">
        <nav id="nav-bar">
          <h1>Logo</h1>
          <ul className="nav-links">
            <li>
              <a className="link" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="link" href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className="link" href="#work">
                Work
              </a>
            </li>

            <li>
              <a className="link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="line4"></div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Nav;
