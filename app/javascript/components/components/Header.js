import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar = () => {
    this.setState({ collapsed: !collapsed });
  };
  render() {
    const { sign_out_route, sign_in_route, new_user_route, logged_in } =
      this.props;
    return (
      <div className="header-container">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            {/* <Link to="/">Travel More</Link> */}
            Travel More
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

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
