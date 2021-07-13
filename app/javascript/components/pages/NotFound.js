import React, { Component } from 'react'
import theoffice from '../assets/theoffice.jpeg'
import { Link } from "react-router-dom";

export class NotFound extends Component {
    render() {
        return (
            <div className="not-found-main">
                
                <h1>404:</h1>
                <p>Page Not Found</p>
                <Link className="home-link" to="/">Go Back To Homepage</Link>
                <img className= "not-found-pic" src={theoffice} alt="jim from office sad face" />
                <h5>!!!No Vacations Here!!!</h5>
            </div>
        )
    }
}

export default NotFound
