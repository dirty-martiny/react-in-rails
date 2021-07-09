import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <div className='footer-main'>
                <h3>Travel-more</h3>
                <NavLink to="/about" className='footer-link'>About Us</NavLink>
                    
            </div>
        )
    }
}

export default Footer
