import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class YourTrips extends Component {
  render() {
    const { trips, user } = this.props;
    let yourtrips = trips.filter((trip) => {
      return trip.user_id === user.id;
    });
    return (
      <div>
        <h1>Your Trips</h1>
        {trips &&
          yourtrips.map((trip) => {
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
