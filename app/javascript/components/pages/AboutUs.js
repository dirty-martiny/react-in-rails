import React, { Component } from "react";
import mockaboutuspic from "../assets/mock-aboutus-pic.jpg";
import vivean from "../assets/vivean.png";
import shaz from "../assets/shaz.jpeg";
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
                    src={vivean}
                    alt="mock about us pic"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Vivean Hanna</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Role: Project Manager
                    </CardSubtitle>
                    <CardText>
                      <a href="https://github.com/Vivean28" target="_blank">
                        <i class="fab fa-github-square"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/vivean-hanna-33b9021ab/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin"></i>
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
                        <i class="fab fa-github-square"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/kevin-burgin-683110181/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin"></i>
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
                    src={shaz}
                    alt="mock about us pic"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Shazeen Fabius</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Role: Tech Lead
                    </CardSubtitle>
                    <CardText>
                      <a href="https://github.com/Shazeen15" target="_blank">
                        <i class="fab fa-github-square"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/shazeen-fabius/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <hr className="style-five" />
          <div>
            <div className="about-devs">
              <h5>About The Developers</h5>
              <Row>
                <Col sm="4">
                  <Card body>
                    <CardText>
                      Vivean is a full stack developer with strong communication
                      skills with 17 years of experience of running and managing
                      her business. As the project manager, she enjoyed working
                      with her group to find solutions.
                    </CardText>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card body>
                    <CardText>
                      Kevin is a full stack developer backed with ten years of
                      strong communication and team building skills, developed
                      through the food service industry. As the design lead he
                      focused on the user experience and the overall UI and UX
                      design.
                    </CardText>
                  </Card>
                </Col>

                <Col sm="4">
                  <Card body>
                    <CardText>
                      Shazeen is a full stack developer with strong one-on-one
                      skills gained by having a Master's in Clinical Counseling.
                      As the tech lead, she focus a lot on clean and
                      functionable code.
                    </CardText>
                  </Card>
                </Col>
              </Row>
            </div>
            <hr className="style-five" />
            <div className="dreams-tech">
              <div className="dream-list">
                <h5>Dream List:</h5>
                <ul className="ul-dream-list">
                  <li>Responsive Design (include a phone view for example)</li>
                  <li>Style Devise forms</li>
                  <li>Allows users to add pictures to their sight</li>
                  <li>
                    Allow the user to select searched sight with a checkbox
                  </li>
                  <li>User can select multiple sights</li>
                  <li>
                    User can save a favorite a trip and see a list of favorite
                    trips
                  </li>
                  <li>
                    User can save a favorite a sight and see a list of favorite
                    sights
                  </li>
                </ul>
              </div>
              <div className="technologies">
                <h5>Technologies:</h5>
                <ul className="tech-dream-list">
                  <li>React</li>
                  <li>Rails</li>
                  <li>Sass</li>
                  <li>Jest</li>
                  <li>Enzymes</li>
                  <li>Reactstrap</li>
                  <li>RSepc</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
