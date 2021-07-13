import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText } from "reactstrap";


export default class TripShow extends Component {
  handleTripDelete = () => {
    this.props.deleteTrip(this.props.trip.id);
  };
  render() {
    const { trip, logged_in, user } = this.props;
    return (
      <div className="tripshow-container">
        <h1>Trip Show</h1>
        {trip && (
          <div>
            <h2>{trip.trip_name}</h2>
            <p>{trip.trip_location}</p>
            <p>{trip.trip_date_range}</p>
            {trip.is_public ? "Public" : "Private"}
            {trip &&
              trip.sights.map((sight) => {
                return (
                  <div>
                    <Card body className="text-right">
                      {/* <CardTitle tag="h5"></CardTitle> */}
                      <CardText>
                        <div className="style-s" key={sight.id}>
                          <h4>{sight.name}</h4>
                          <p>{sight.address1}</p>
                          <p>{sight.city}</p>
                          <p>{sight.zip_code}</p>
                          <p>{sight.state}</p>
                          <p>{sight.country}</p>
                          <p>{sight.phone}</p>
                          {logged_in && trip.user_id === user.id && (
                            <div>
                              <Link
                                to={`/trips/${trip.id}/sight-edit/${sight.id}`}
                              >
                                <Button className="edit-btn">Edit sight</Button>
                              </Link>
                              <Button
                                className="delete-btn"
                                onClick={() => this.props.deleteSight(sight.id)}
                              >
                                Delete Sight
                              </Button>
                            </div>
                          )}
                        </div>
                      </CardText>
                    </Card>
                  </div>
                );
              })}

            {logged_in && trip.user_id === user.id && (
              <div>
                <Card>
                  <Button className="last-card">
                    <Link to={`/tripedit/${trip.id}`}>Edit Trip</Link>
                  </Button>
                  <Link to="/tripsindex">
                    <Button
                      className="last-card"
                      onClick={this.handleTripDelete}
                    >
                      Delete Trip
                    </Button>
                  </Link>
                  <Button className="last-card">
                    <Link to={`/sightnew/${trip.id}`}>New Sight</Link>
                  </Button>
                </Card>
              </div>
            )}
            {logged_in && (
              <Button className="last-card">
                <Link to="/">Back to Dash</Link>
              </Button>
            )}
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
