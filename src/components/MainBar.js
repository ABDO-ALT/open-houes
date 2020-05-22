import React from "react";
import "../App";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
function MainBar() {
  return (
    <div>
      <header>
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default MainBar;
