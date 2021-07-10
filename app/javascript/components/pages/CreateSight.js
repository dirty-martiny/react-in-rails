import React, { Component } from "react";
import SightNew from "./SightNew";
import YelpSearch from "./YelpSearch";

export default class CreateSight extends Component {
  render() {
    const { createSight, trip, yelpApi, businesses } = this.props;
    return (
      <div>
        <SightNew createSight={createSight} trip={trip} />
        <YelpSearch yelpApi={yelpApi} businesses={businesses} />
      </div>
    );
  }
}
