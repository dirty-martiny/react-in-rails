import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default class YelpBusinesses extends Component {
  render() {
    const { businesses } = this.props;
    return (
      <div className="yelp-businesses-container">
        <h2 className="yb-header-title">Results</h2>
        {businesses &&
          businesses.map((business) => {
            return (
              <div key={business.id} className="yelp-businesses">
                <Card>
                  {business.image_url && (
                    <CardImg
                      top
                      width="100%"
                      src={business.image_url}
                      alt="business picture"
                    />
                  )}
                  <CardBody>
                    <CardTitle tag="h5">{business.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {business.location.phone}
                    </CardSubtitle>
                    <CardText>
                      <p>
                        {/* {" "} this is for the space that i need after each span */}
                        <span>{business.location.address1}</span> |{" "}
                        <span>{business.location.city}</span> |{" "}
                        <span>{business.location.zip_code}</span> |{" "}
                        <span>{business.location.state}</span> |{" "}
                        <span>{business.location.country}</span>
                      </p>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            );
          })}
      </div>
    );
  }
}
