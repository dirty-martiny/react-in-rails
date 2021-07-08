import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    const { sign_out_route, sign_in_route, logged_in } = this.props;
    return (
      <div>
        <h2>Header</h2>
        <div>
          <Link to="/tripsindex">Trips</Link>
        </div>
        {logged_in && (
          <div>
            <a href={sign_out_route}>Sign Out</a>
            <Link to="/about">About Us</Link>
          </div>
        )}
        {!logged_in && (
          <div>
            <a href={sign_in_route}>Sign In</a>
            <Link to="/about">About Us</Link>
          </div>
        )}
      </div>
    );
  }
}
