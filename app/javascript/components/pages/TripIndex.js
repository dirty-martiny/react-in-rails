import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default class TripIndex extends Component {
  render() {
    const { trips } = this.props;
    let publicTrips =
      trips &&
      trips.filter((trip) => {
        return trip.is_public;
      });
    return (
      <div className="main-card-container trip-index-container">
        <h1>TripIndex</h1>
        <Row>
          {trips &&
            publicTrips.map((trip) => {
              return (
                <Col sm="3" key={trip.id}>
                  <Card body>
                    <CardTitle tag="h5">{trip.trip_name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2">
                      {trip.trip_location}
                    </CardSubtitle>
                    <Link to={`/trips/${trip.id}`}>
                      <Button>More Details</Button>
                    </Link>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    );
  }
}
