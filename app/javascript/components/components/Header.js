import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    const { sign_out_route, sign_in_route, new_user_route, logged_in } =
      this.props;
    return (
      <div className="main-header">
        <Link className="logo" to="/">
          Travel More
        </Link>
        {!logged_in && (
          <div>
            <Link className="nvb" to="/tripsindex">
              Trips
            </Link>
            <Link className="nvb" to="/about">
              About Us
            </Link>
            <a className="nvb" href={sign_in_route}>
              Sign In
            </a>
            <a className="nvb" href={new_user_route}>
              Sign Up
            </a>
          </div>
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
