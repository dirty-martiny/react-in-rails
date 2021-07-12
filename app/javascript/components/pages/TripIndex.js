import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TripIndex extends Component {
  render() {
    const { trips } = this.props;
    return (
      <div className="main-container">
        <h1>TripIndex</h1>
        {trips &&
          trips.map((trip) => {
            return (
              <div key={trip.id}>
                <h2>{trip.trip_name}</h2>
                <p>{trip.trip_location}</p>

                <Link className="more-details" to={`/trips/${trip.id}`}>More Details</Link>
              </div>
            );
          })}
      </div>
    );
  }
}
