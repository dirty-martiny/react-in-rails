import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Card } from "reactstrap";
import { Redirect } from "react-router-dom";

export default class TripNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        trip_name: "",
        trip_location: "",
        trip_date_range: "",
        is_public: false,
        user_id: this.props.current_user.id,
      },
      submitted: false,
    };
  }
  handleChange = (e) => {
    // destructuring form out of state
    let { form } = this.state;
    form[e.target.name] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ form: form });
  };
  handleSubmit = (e) => {
    // keeps react from refreshing the page unnecessarily
    e.preventDefault();
    this.props.createNewTrip(this.state.form);
    this.setState({ submitted: true });
  };
  render() {
    return (
      <div className="form-container">
        <h1>Add a Trip</h1>
        <Card>
          <Form>
            <FormGroup>
              <Label>Trip Name</Label>
              <Input
                type="text"
                name="trip_name"
                onChange={this.handleChange}
                value={this.state.form.trip_name}
              />
            </FormGroup>
            <FormGroup>
              <Label>Trip Location</Label>
              <Input
                type="text"
                name="trip_location"
                onChange={this.handleChange}
                value={this.state.form.trip_location}
              />
            </FormGroup>
            <FormGroup>
              <Label>Trip date range</Label>
              <Input
                type="text"
                name="trip_date_range"
                onChange={this.handleChange}
                value={this.state.form.trip_date_range}
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-for-check">Is public</Label>
              <Input
                type="checkbox"
                name="is_public"
                checked={this.state.form.is_public}
                onChange={this.handleChange}
              />
            </FormGroup>

            <Button name="submit" color="secondary" onClick={this.handleSubmit}>
              Add a New Trip
            </Button>
          </Form>
        </Card>
        {this.state.submitted && <Redirect to="/yourtrips" />}
      </div>
    );
  }
}
