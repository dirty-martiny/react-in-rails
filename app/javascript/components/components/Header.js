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
      isOpen: false,
    };
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { sign_out_route, sign_in_route, new_user_route, logged_in } =
      this.props;
    return (
      <div className="header-container">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Travel More</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {!logged_in && (
                <>
                  <NavItem>
                    <Link to="/tripsindex" className="nav-link">
                      Trips
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>
                  </NavItem>
                  <NavItem>
                    <NavLink href={sign_in_route}>Sign In</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={new_user_route}>Sign Up</NavLink>
                  </NavItem>
                </>
              )}
              {logged_in && (
                <>
                  <NavItem>
                    <Link to="/">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/yourtrips">Your Trips</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/newtrip">New Trip</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/about">About Us</Link>
                  </NavItem>
                  <NavItem>
                    <Link href={sign_out_route}>Sign Out</Link>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
