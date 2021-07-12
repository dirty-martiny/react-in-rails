import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap"

export default class TripIndex extends Component {
  render() {
    const { trips } = this.props;
    let publicTrips = trips && trips.filter((trip) => {
      return trip.is_public;
    });
    return (
      <div className="tripindex-container">
        <h1>TripIndex</h1>
        {trips &&
          publicTrips.map((trip) => {
            return (
              <div key={trip.id}>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{trip.trip_name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {trip.trip_location}
                    </CardSubtitle>
                    <Link to={`/trips/${trip.id}`}>
                      <Button>More Details</Button>
                    </Link>
                  </CardBody>
                </Card>
              </div>
            );
          })}
      </div>
    );
  }
}
