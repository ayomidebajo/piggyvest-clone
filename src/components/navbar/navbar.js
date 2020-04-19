import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../img/piggy-vest-logo.png";

function Navbar() {
  return (
    <div className="navbar--container">
      <ul className="navbar--lists">
        <Link to="/" className="logo" >
          <img src={Logo} alt="logo" width="180px"  />
        </Link>

        <li>
          <a href="#" className="navlink">
            About
          </a>
        </li>
        <li>
          <a href="#" className="navlink">
            Stories
          </a>
        </li>
        <li>
          <a href="#" className="navlink">
            FAQ
          </a>
        </li>
        <li>
          <a href="#" className="navlink">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="navlink">
            Log In
          </a>
        </li>
        <li>
          <a href="#" className="navlink">
            <button className="btn-blue">Create a Free Account</button>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
