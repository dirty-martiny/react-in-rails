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
