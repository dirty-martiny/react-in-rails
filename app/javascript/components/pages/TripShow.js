import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  CardSubtitle,
} from "reactstrap";

export default class TripShow extends Component {
  handleTripDelete = () => {
    this.props.deleteTrip(this.props.trip.id);
  };
  render() {
    const { trip, logged_in, user } = this.props;
    return (
      <div className="main-card-container trip-show-container">
        {trip && (
          <>
            <div className="ts-info">
              <h2>{trip.trip_name}</h2>
              <p>{trip.trip_location}</p>
              <p>{trip.trip_date_range}</p>
              {trip.is_public ? "Public" : "Private"}
            </div>

            <Row>
              {trip &&
                trip.sights.map((sight) => {
                  return (
                    <Col sm="6" key={sight.id}>
                      <Card body>
                        <div>
                          <CardTitle tag="h5">{sight.name}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {sight.phone}
                          </CardSubtitle>
                          <CardText>
                            <span>
                              {/* {" "} this is for the space that i need after each span */}
                              <span>{sight.address1}</span> |{" "}
                              <span>{sight.city}</span> |{" "}
                              <span>{sight.zip_code}</span> |{" "}
                              <span>{sight.state}</span> |{" "}
                              <span>{sight.country}</span>
                            </span>
                          </CardText>
                        </div>
                        <div>
                          {logged_in && trip.user_id === user.id && (
                            <>
                              <Link
                                to={`/trips/${trip.id}/sight-edit/${sight.id}`}
                              >
                                <Button className="edit-btn">Edit</Button>
                              </Link>
                              <Button
                                className="delete-btn"
                                onClick={() => this.props.deleteSight(sight.id)}
                              >
                                Delete
                              </Button>
                            </>
                          )}
                        </div>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
            {logged_in && trip.user_id === user.id && (
              <div className="bottom-btn">
                <Button className="ts-btn">
                  <Link to={`/tripedit/${trip.id}`}>Edit Trip</Link>
                </Button>
                <Link to="/tripsindex">
                  <Button className="ts-btn" onClick={this.handleTripDelete}>
                    Delete Trip
                  </Button>
                </Link>
                <Button className="ts-btn">
                  <Link to={`/sightnew/${trip.id}`}>New Sight</Link>
                </Button>
              </div>
            )}
            {logged_in && (
              <Button className="ts-btn  btd-btn">
                <Link to="/">Back to Dash</Link>
              </Button>
            )}
            {!logged_in && (
              <div>
                <Link to="/tripsindex">Back to Trips</Link>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}
