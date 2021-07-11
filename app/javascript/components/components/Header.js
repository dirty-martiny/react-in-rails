import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    const { sign_out_route, sign_in_route, new_user_route, logged_in } =
      this.props;
    return (
      <div className="header-container">
        <Link to="/" className="travel-more">
          Travel More
        </Link>
        {!logged_in && (
          <>
            <Link to="/tripsindex" className="header-links">
              Trips
            </Link>
            <Link to="/about" className="header-links">
              About Us
            </Link>
            <a href={sign_in_route} className="header-links">
              Sign In
            </a>
            <a href={new_user_route} className="header-links">
              Sign Up
            </a>
          </>
        )}
        {logged_in && (
          <>
            <Link to="/" className="header-links">
              Home
            </Link>
            <Link to="/yourtrips" className="header-links">
              Your Trips
            </Link>
            <Link to="/newtrip" className="header-links">
              New Trip
            </Link>
            <Link to="/about" className="header-links">
              About Us
            </Link>
            <a href={sign_out_route} className="header-links">
              Sign Out
            </a>
          </>
        )}
      </div>
    );
  }
}
