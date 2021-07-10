import React, { Component } from "react";
import { Button } from "reactstrap";

export default class YelpSearch extends Component {
  render() {
    const { yelpApi } = this.props;
    return (
      <div>
        <h1>Search For Sights Near You</h1>
        <Button
          onClick={() => {
            yelpApi("pizza", "miami");
          }}
        >
          Search
        </Button>
      </div>
    );
  }
}
