import React, { Component } from "react";
import SightNew from "./SightNew";
import YelpSearch from "./YelpSearch";

export default class CreateSight extends Component {
  render() {
    const { createSight, trip, yelpApi } = this.props;
    return (
      <div>
        <SightNew createSight={this.createSight} trip={trip} />
        <YelpSearch yelpApi={yelpApi} />
      </div>
    );
  }
}
