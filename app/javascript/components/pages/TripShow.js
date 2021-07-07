import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TripShow extends Component {
  render() {
    const { trip } = this.props;
    return (
      <div>
        <h1>Trip Show</h1>
        {trip && (
          <div>
            <h2>{trip.trip_name}</h2>
            <p>{trip.trip_location}</p>
            <p>{trip.trip_date_range}</p>
            {trip.is_public ? "Public" : "Private"}
            <div>
              <Link to="/tripsindex">Back to Trips</Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
