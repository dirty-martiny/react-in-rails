import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dash extends Component {
  render() {
    const { trips, user } = this.props;
    let publicTrips = trips.filter((trip) => {
      return trip.is_public;
    });
    return (
      <div>
        <div>
          <h1>Welcome {`${user.email}`}</h1>
          <Link to="/yourtrips">Your Trips</Link>
        </div>

        {trips &&
          publicTrips.map((trip) => {
            return (
              <div key={trip.id}>
                <h2>{trip.trip_name}</h2>
                <p>{trip.trip_location}</p>

                <Link to={`/trips/${trip.id}`}>More Details</Link>
              </div>
            );
          })}
      </div>
    );
  }
}
