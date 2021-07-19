import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export class SightEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: this.props.sight.name,
        address1: this.props.sight.address1,
        city: this.props.sight.city,
        zip_code: this.props.sight.zip_code,
        state: this.props.sight.state,
        country: this.props.sight.country,
        phone: this.props.sight.phone,
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
    this.props.editSight(this.state.form, this.props.sight.id);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className="sight-edit-container form-container ">
        <h1>Edit Your Sight</h1>
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
          <FormGroup>
            <Label for="address1">Sight's Street Address</Label>
            <Input
              type="text"
              name="address1"
              onChange={this.handleChange}
              value={this.state.form.address1}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">Sight's City</Label>
            <Input
              type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.form.city}
            />
          </FormGroup>
          <FormGroup>
            <Label for="zip_code">Sight's Zipcode</Label>
            <Input
              type="text"
              name="zip_code"
              onChange={this.handleChange}
              value={this.state.form.zip_code}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">Sight's State</Label>
            <Input
              type="text"
              name="state"
              onChange={this.handleChange}
              value={this.state.form.state}
            />
          </FormGroup>
          <FormGroup>
            <Label for="country">Sight's Country</Label>
            <Input
              type="text"
              name="country"
              onChange={this.handleChange}
              value={this.state.form.country}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Sight's Phone</Label>
            <Input
              type="text"
              name="phone"
              onChange={this.handleChange}
              value={this.state.form.phone}
            />
          </FormGroup>
          <Button name="submit" onClick={this.handleSubmit}>
            Edit Sight
          </Button>
        </Form>
        {this.state.submitted && (
          <Redirect to={`/trips/${this.props.sight.trip_id}`} />
        )}
      </div>
    );
  }
}

export default SightEdit;
