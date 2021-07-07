import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import TripIndex from "./pages/TripIndex";
import TripShow from "./pages/TripShow";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      sights: [],
    };
  }

  componentDidMount() {
    this.indexTrips();
    this.indexSights();
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

  indexSights = () => {
    fetch("/sights")
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        this.setState({ sights: payload });
      })
      .catch((errors) => {
        console.log("index errors:", errors);
      });
  };

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
          <div>
            <Link to="/tripsindex">Trips</Link>
          </div>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route path="/about" component={AboutUs} /> */}

            <Route
              path="/tripsindex"
              render={(props) => {
                return <TripIndex trips={this.state.trips} />;
              }}
            />
            <Route
              path="/trips/:id"
              render={(props) => {
                let id = +props.match.params.id;
                let trip = this.state.trips.find((trip) => trip.id === id);
                return <TripShow trip={trip} />;
              }}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
