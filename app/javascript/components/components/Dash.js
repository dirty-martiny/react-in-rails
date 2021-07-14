import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

export default class Dash extends Component {
  render() {
    const { trips, user } = this.props;
    let publicTrips =
      trips &&
      trips.filter((trip) => {
        return trip.is_public;
      });
    return (
      <div className="main-card-container">
        <div>
          <h1>Welcome {`${user.email}`}</h1>
          <Button>
            <Link to="/yourtrips">Your Trips</Link>
          </Button>
        </div>
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
