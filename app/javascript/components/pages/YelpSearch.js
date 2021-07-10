import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Redirect } from "react-router-dom";
import YelpBusinesses from "./YelpBusinesses";

export default class YelpSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        item: "",
        location: "",
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
    this.setState({ submitted: true });
  };
  render() {
    const { yelpApi, businesses } = this.props;
    return (
      <div>
        <h1>Search For Sights Near You</h1>
        <Form>
          <FormGroup>
            <Label for="item">
              What are you in the mood for?{" "}
              <span>e.i 'museum', 'food', 'park'</span>
            </Label>
            <Input
              type="text"
              name="item"
              onChange={this.handleChange}
              value={this.state.form.item}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="location">
              Location:{" "}
              <span>e.i 'city', 'state', 'zip-code', or 'country'</span>)
            </Label>
            <Input
              type="text"
              name="location"
              onChange={this.handleChange}
              value={this.state.form.location}
            />
          </FormGroup>
          <br />
          <Button
            className="button-style"
            name="submit"
            onClick={() => {
              yelpApi(this.state.form.item, this.state.form.location);
            }}
          >
            Search
          </Button>
        </Form>
        {businesses && <YelpBusinesses businesses={businesses} />}
        {this.state.submitted && (
          <Redirect to={`/trips/${this.props.trip.id}`} />
        )}
      </div>
    );
  }
}
