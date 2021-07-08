import React, { Component } from 'react'
import theoffice from '../assets/theoffice.jpeg'

export class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>!!!No Vacations Here!!!</h1>
                <img src={theoffice} alt="jim from office sad face" />
            </div>
        )
    }
}

export default NotFound
