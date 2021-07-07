import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap'

export class SightNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: "",
                address1: "",
                city: "",
                zip_code: "",
                state: "",
                country: "", 
                phone: "",
                trip_id: 
            }
        }
    }
    render() {
        return (
            <div>
                <h1>Sight New Page</h1>
            </div>
        )
    }
}

export default SightNew
