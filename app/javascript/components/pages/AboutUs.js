import React, { Component } from "react";
import mockaboutuspic from "../assets/mock-aboutus-pic.jpg";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-container">
        <h2 className="au-title">About Us</h2>
        <div>
          <div className="au-card">
            <Row>
              {/* vivean */}
              <Col sm="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={mockaboutuspic}
                    alt="mock about us pic"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Vivean Hanna</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Role: Project Manager
                    </CardSubtitle>
                    <CardText>
                      <a href="https://github.com/Vivean28" target="_blank">
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/vivean-hanna-33b9021ab/"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              {/* kevin */}
              <Col sm="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={mockaboutuspic}
                    alt="mock about us pic"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Kevin Burgin</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Role: Design Lead
                    </CardSubtitle>
                    <CardText>
                      <a href="https://github.com/KevinBurgin" target="_blank">
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/kevin-burgin-683110181/"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              {/* shazeen */}
              <Col sm="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={mockaboutuspic}
                    alt="mock about us pic"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Shazeen Fabius</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Role: Tech Lead
                    </CardSubtitle>
                    <CardText>
                      <a href="https://github.com/Shazeen15" target="_blank">
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/shazeen-fabius/"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
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
                <li>Allows users to add pictures to their sight</li>-{" "}
                <li>Allow the user to select searched sight with a checkbox</li>
                <li>User can select multiple sights</li>
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
