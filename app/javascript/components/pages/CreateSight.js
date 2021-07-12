import React, { Component } from "react";
import SightNew from "./SightNew";
import YelpSearch from "./YelpSearch";

export default class CreateSight extends Component {
  render() {
    const { createSight, trip, sightSearch, businesses } = this.props;
    return (
      <div className="create-sight-container">
        <SightNew createSight={createSight} trip={trip} />
        <YelpSearch sightSearch={sightSearch} businesses={businesses} />
      </div>
    );
  }
}
