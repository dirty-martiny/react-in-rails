import React, { Component } from "react";
import mockaboutuspic from "../assets/mock-aboutus-pic.jpg";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <h2>About Us</h2>
        <div>
          <div>
            <h3>Vivean Hanna</h3>
            <img src={mockaboutuspic} alt="mock about us pic" />
            <a href="https://github.com/Vivean28" target="_blank">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vivean-hanna-33b9021ab/"
              target="_blank"
            >
              LinkedIn
            </a>
            <p>Role: Project Manager</p>
          </div>
          <div>
            <h3>Kevin Burgin</h3>
            <img src={mockaboutuspic} alt="mock about us pic" />
            <a href="https://github.com/KevinBurgin" target="_blank">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-burgin-683110181/"
              target="_blank"
            >
              LinkedIn
            </a>
            <p>Role: Design Lead</p>
          </div>
          <div>
            <h3>Shazeen Fabius</h3>
            <img src={mockaboutuspic} alt="mock about us pic" />
            <a href="https://github.com/Shazeen15" target="_blank">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shazeen-fabius/"
              target="_blank"
            >
              LinkedIn
            </a>
            <p>Role: Tech Lead</p>
          </div>
          <hr />
          <div>
            <div className="about-devs">
              <p>About The Developers</p>
              <p>Vivean likes...</p>
              <p>Kevin likes...</p>
              <p>Shazeen likes...</p>
            </div>
            <div className="dream-list">
              <p>Dream List:</p>
              <ul>
                <li>Allows users to add pictures to their sight</li>
              </ul>
            </div>
            <div className="technologies">
              <p>Technologies:</p>
              <ul>
                <li>React</li>
                <li>Rails</li>
                <li>Sass</li>
                <li>Jest</li>
                <li>Enzymes</li>
                <li>Reactstrap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
