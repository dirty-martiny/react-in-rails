import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardText } from "reactstrap";

export default class TripShow extends Component {
  handleTripDelete = () => {
    this.props.deleteTrip(this.props.trip.id);
  };
  render() {
    const { trip, logged_in, user } = this.props;
    return (
      <div className="trip-show-main">
        {/* <h1>Trip Show</h1> */}
        {trip && (
          <Card className="trip-show-card">
            <CardText><h2>{trip.trip_name}</h2></CardText>
            <CardText>Location: {trip.trip_location}</CardText>
            <CardText>When: {trip.trip_date_range}</CardText>
            {trip.is_public ? "Public" : "Private"}
            {trip &&
              trip.sights.map((sight) => {
                return (
                  <div key={sight.id}>
                    <Card className="sight-show-card">
                    <CardText>Name: {sight.name}</CardText>
                    <CardText>Street Address: {sight.address1}</CardText>
                    {/* <CardText>{sight.city}</CardText>
                    <CardText>{sight.zip_code}</CardText>
                    <CardText>{sight.state}</CardText>
                    <CardText>{sight.country}</CardText> */}
                    <CardText>Phone Number: {sight.phone}</CardText>
                    {logged_in && trip.user_id === user.id && (
                      <div className="sight-buttons-main">
                        <Link to={`/trips/${trip.id}/sight-edit/${sight.id}`}>
                          <Button id="sight-button" onClick={() => this.props.editSight(sight.id)}>
                          Edit sight
                          </Button>
                        </Link>
                        <Button
                          id="sight-button" onClick={() => this.props.deleteSight(sight.id)}
                        >
                          Delete Sight
                        </Button>
                      </div>
                    )}
                    </Card>
                  </div>
                );
              })}

            {logged_in && trip.user_id === user.id && (
              <div className="trip-buttons-main">
                <Link to={`/tripedit/${trip.id}`}>
                  <Button id="button" onClick={() =>this.props.editTrip}>Edit Trip</Button>
                </Link>
                <Link to="/tripsindex">
                  <Button id="button" onClick={this.handleTripDelete}>Delete Trip</Button>
                </Link>
                <Link to={`/sightnew/${trip.id}`}>
                  <Button id="button" onClick={() => this.props.createSight}>New Sight</Button>
                </Link>
              </div>
            )}
            {logged_in && <Link to="/">Back to Dash</Link>}
            {!logged_in && (
              <div>
                <Link to="/tripsindex">Back to Trips</Link>
              </div>
            )}
          </Card>
        )}
      </div>
    );
  }
}
