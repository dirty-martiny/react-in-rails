import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

export default class YourTrips extends Component {
  render() {
    const { trips, user } = this.props;
    let yourtrips =
      trips &&
      trips.filter((trip) => {
        return trip.user_id === user.id;
      });
    return (
      <div className="main-card-container your-trips-container">
        <h2>Your Trips</h2>
        <Row>
          {trips &&
            yourtrips.map((trip) => {
              return (
                <div key={trip.id}>
                  <Col sm="4">
                    <Card body>
                      <CardTitle tag="h5">{trip.trip_name}</CardTitle>
                      <CardText>{trip.trip_location}</CardText>
                      <Link to={`/trips/${trip.id}`}>
                        <Button>More Details</Button>
                      </Link>
                    </Card>
                  </Col>
                </div>
              );
            })}
        </Row>
      </div>
    );
  }
}
