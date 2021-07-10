import React, { Component } from "react";

export default class YelpBusinesses extends Component {
  render() {
    const { businesses } = this.props;
    return (
      <div>
        <h2>Results</h2>
        {businesses &&
          businesses.map((business) => {
            return (
              <div key={business.id} className="yelp-businesses">
                <h2>{business.name}</h2>
                <img src={business.image_url} alt="business picture" />
                <p>{business.location.address1}</p>
                <p>{business.location.city}</p>
                <p>{business.location.zip_code}</p>
                <p>{business.location.state}</p>
                <p>{business.location.country}</p>
                <p>{business.location.phone}</p>
              </div>
            );
          })}
      </div>
    );
  }
}
