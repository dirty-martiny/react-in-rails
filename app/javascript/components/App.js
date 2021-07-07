import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import TripIndex from "./pages/TripIndex";
import SightNew from "./pages/SightNew"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    };
  }

  componentDidMount() {
    this.indexTrips();
  }

  indexTrips = () => {
    fetch("/trips")
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        this.setState({ trips: payload });
      })
      .catch((errors) => {
        console.log("index errors:", errors);
      });
  };

  createSight = (newsight) => {
    fetch("/sights", {
      body: JSON.stringify(newsight),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readSights())
    .catch(errors => console.log("Sight create fetch errors:", errors))
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <React.Fragment>
        {logged_in && (
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        )}
        {!logged_in && (
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        )}
        <Router>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route path="/about" component={AboutUs} /> */}
            <Route path="/sightnew" render={(props) => {
              let trip = this.state.trips.filter(trip => trip.id === id);
            return <SightNew createSight={this.createSight} trip={trip}/> } 
          }/>
          </Switch>
        </Router>
        <TripIndex trips={this.state.trips} />
      </React.Fragment>
    );
  }
}

export default App;
