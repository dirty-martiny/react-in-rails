import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

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
                    <CardText>{trip.trip_location}</CardText>
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
