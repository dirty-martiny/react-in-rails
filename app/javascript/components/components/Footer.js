import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <div className="footer-main">
        <NavLink to="/" className="footer-home-link">
          Travel-more
        </NavLink>
        <NavLink to="/about" className="footer-link">
          About Us
        </NavLink>
      </div>
    );
  }
}

export default Footer;
