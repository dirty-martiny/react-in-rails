import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export class SightNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        address1: "",
        city: "",
        zip_code: "",
        state: "",
        country: "",
        phone: "",
        trip_id: this.props.trip && this.props.trip.id,
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.createSight(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className="sight-new-main">
        <h1>Add A New Sight</h1>
        <Form >
          <FormGroup>
            <Label for="name">Name of Sight</Label>
            <Input 
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="address1">Street Address</Label>
            <Input
              type="text"
              name="address1"
              onChange={this.handleChange}
              value={this.state.form.address1}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.form.city}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="zip_code">Zipcode</Label>
            <Input
              type="text"
              name="zip_code"
              onChange={this.handleChange}
              value={this.state.form.zip_code}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              type="text"
              name="state"
              onChange={this.handleChange}
              value={this.state.form.state}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="country">Country</Label>
            <Input
              type="text"
              name="country"
              onChange={this.handleChange}
              value={this.state.form.country}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="phone">Phone Number</Label>
            <Input
              type="text"
              name="phone"
              onChange={this.handleChange}
              value={this.state.form.phone}
            />
          </FormGroup>
          <br />
          <Button
            className="button-style"
            name="submit"
            onClick={this.handleSubmit}
          >
            Add To Trip
          </Button>
        </Form>
        {this.state.submitted && (
          <Redirect to={`/trips/${this.props.trip.id}`} />
        )}
      </div>
    );
  }
}

export default SightNew;
