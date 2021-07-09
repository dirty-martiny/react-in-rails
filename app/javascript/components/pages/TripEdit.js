import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Redirect } from "react-router-dom";

export class TripEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        trip_name: this.props.trip.trip_name,
        trip_location: this.props.trip.trip_location,
        trip_date_range: this.props.trip.trip_date_range,
        is_public: this.props.trip.is_public,
      },
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.editTrip(this.state.form, this.props.trip.id);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div>
        <h1>Trip Edit Page</h1>
        <Form>
          <FormGroup>
            <Label>Trip's Name</Label>
            <Input
              type="text"
              name="trip_name"
              onChange={this.handleChange}
              value={this.state.form.trip_name}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Trip's Location</Label>
            <Input
              type="text"
              name="trip_location"
              onChange={this.handleChange}
              value={this.state.form.trip_location}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Date of Trip</Label>
            <Input
              type="text"
              name="trip_date_range"
              onChange={this.handleChange}
              value={this.state.form.trip_date_range}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Check here to show your trip to friends</Label>
            <Input
              type="checkbox"
              name="is_public"
              checked={this.state.form.is_public}
              onChange={this.handleChange}
            />
          </FormGroup>
          <br />
          <Button name="submit" color="secondary" onClick={this.handleSubmit}>
            Update Trip
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/tripsindex" />}
      </div>
    );
  }
}

export default TripEdit;
