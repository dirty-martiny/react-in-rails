import React, { Component } from "react";

export default class TripIndex extends Component {
  render() {
    const { trips } = this.props;
    console.log(trips);
    return (
      <div>
        <h1>TripIndex</h1>
        {trips &&
          trips.map((trip) => {
            return (
              <div key={trip.id}>
                <h2>{trip.trip_name}</h2>
                <p>{trip.trip_location}</p>
                <p>{trip.trip_date_range}</p>
                {trip.is_public ? "Public" : "Private"}
                <a href={`/trips/${trip.id}`}>More Details</a>
              </div>
            );
          })}
      </div>
    );
  }
}
