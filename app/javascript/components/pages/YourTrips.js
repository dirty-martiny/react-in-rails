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
      <div className="your-trips-container">
        <h1 className="yt-header-title">Your Trips</h1>
        <div className="yt-card">
          {trips &&
            yourtrips.map((trip) => {
              return (
                <div key={trip.id}>
                  <Row>
                    <Col sm="15">
                      <Card body>
                        <CardTitle tag="h5">{trip.trip_name}</CardTitle>
                        <CardText>{trip.trip_location}</CardText>
                        <Link to={`/trips/${trip.id}`}>
                          <Button>More Details</Button>
                        </Link>
                      </Card>
                    </Col>
                  </Row>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
