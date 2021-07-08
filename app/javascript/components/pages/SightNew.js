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
    console.log(this.state.form);
    this.props.createSight(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    console.log(this.props.trip && this.props.trip.id);
    return (
      <div>
        <h1>Sight New Page</h1>
        <Form>
          <FormGroup>
            <Label for="name">Sight's Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="address1">Sight's Street Address</Label>
            <Input
              type="text"
              name="address1"
              onChange={this.handleChange}
              value={this.state.form.address1}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="city">Sight's City</Label>
            <Input
              type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.form.city}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="zip_code">Sight's Zipcode</Label>
            <Input
              type="text"
              name="zip_code"
              onChange={this.handleChange}
              value={this.state.form.zip_code}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="state">Sight's State</Label>
            <Input
              type="text"
              name="state"
              onChange={this.handleChange}
              value={this.state.form.state}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="country">Sight's Country</Label>
            <Input
              type="text"
              name="country"
              onChange={this.handleChange}
              value={this.state.form.country}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="phone">Sight's Phone</Label>
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
        {this.state.submitted && <Redirect to = {`/trips/${this.props.trip.id}`}/>}
      </div>
    );
  }
}

export default SightNew;
