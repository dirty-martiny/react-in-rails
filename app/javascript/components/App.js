import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import TripIndex from "./pages/TripIndex";
import TripNew from "./pages/TripNew"

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

    createNewTrip = (newTrip) => {
    fetch("/trips", {
      body: JSON.stringify(newTrip),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("There is something wrong with your submission.")
      }
      return response.json()
    })
    .then(() => {
      this.indexApartment()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
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
            <Route 
              path="/newtrip"
              render={(props) =>
                <TripNew
                  createNewTrip={ this.createNewTrip }
                  current_user={ current_user }
                />
            }
            />
          </Switch>
        </Router>
        <TripIndex trips={this.state.trips} />
      </React.Fragment>
    );
  }
}

export default App;
