import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default class TripShow extends Component {
  handleTripDelete = () => {
    this.props.deleteTrip(this.props.trip.id);
  };
  render() {
    const { trip, logged_in, user } = this.props;
    return (
      <div className="main-container">
        <h1>Trip Show</h1>
        {trip && (
          <div className="">
            <h2>{trip.trip_name}</h2>
            <p>{trip.trip_location}</p>
            <p>{trip.trip_date_range}</p>
            {trip.is_public ? "Public" : "Private"}
            {trip &&
              trip.sights.map((sight) => {
                return (
                  <div key={sight.id}>
                    <h4>{sight.name}</h4>
                    <p>{sight.address1}</p>
                    <p>{sight.city}</p>
                    <p>{sight.zip_code}</p>
                    <p>{sight.state}</p>
                    <p>{sight.country}</p>
                    <p>{sight.phone}</p>
                    {logged_in && trip.user_id === user.id && (
                      <div className="links">
                        <Link to={`/trips/${trip.id}/sight-edit/${sight.id}`}>
                          Edit sight
                        </Link>
                        <Button
                          onClick={() => this.props.deleteSight(sight.id)}
                        >
                          Delete Sight
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}

            {logged_in && trip.user_id === user.id && (
              <div>
                <Link to={`/tripedit/${trip.id}`}>Edit Trip</Link>
                <Link to="/tripsindex">
                  <Button onClick={this.handleTripDelete}>Delete Trip</Button>
                </Link>
                <Link to={`/sightnew/${trip.id}`}>New Sight</Link>
              </div>
            )}
            {logged_in && <Link to="/">Back to Dash</Link>}
            {!logged_in && (
              <div>
                <Link to="/tripsindex">Back to Trips</Link>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
 