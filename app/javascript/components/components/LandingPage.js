import React, { Component } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-container">
        {/* <video src="../assets/video1.mp4" autoPlay loop muted /> */}
        <div className="landing-container-2">
          <h2>Travel More</h2>
          <p>
            One place for all your trip planning{" "}
            <span>a new way to share your travels</span>
          </p>
          <p>Want to travel to the same place again and loved your trip</p>
          <p>Do it again with your saved trips</p>
        </div>
      </div>
    );
  }
}
