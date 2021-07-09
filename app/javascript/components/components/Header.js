import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    const { sign_out_route, sign_in_route, new_user_route, logged_in } =
      this.props;
    return (
      <div>
        <Link to="/">Travel More</Link>
        {!logged_in && (
          <div>
            <Link to="/tripsindex">Trips</Link>
            <Link to="/about">About Us</Link>
            <a href={sign_in_route}>Sign In</a>
            <a href={new_user_route}>Sign Up</a>
          </div>
        )}
        {logged_in && (
          <div>
            <Link to="/">Home</Link>
            <Link to="/yourtrips">Your Trips</Link>
            <Link to="/newtrip">New Trip</Link>
            <Link to="/about">About Us</Link>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        )}
      </div>
    );
  }
}
