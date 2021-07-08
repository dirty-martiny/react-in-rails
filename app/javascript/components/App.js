import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import TripIndex from "./pages/TripIndex";
import TripShow from "./pages/TripShow";
import SightNew from "./pages/SightNew";
import TripNew from "./pages/TripNew";
import TripEdit from "./pages/TripEdit"
import AboutUs from "./pages/AboutUs";
import Dash from "./components/Dash";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";

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
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => this.indexTrips())
      .catch((errors) => console.log("Sight create fetch errors:", errors));
  };

  createNewTrip = (newTrip) => {
    fetch("/trips", {
      body: JSON.stringify(newTrip),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("There is something wrong with your submission.");
        }
        return response.json();
      })
      .then(() => {
        this.indexApartment();
      })
      .catch((errors) => {
        console.log("create errors:", errors);
      });
  };

  editTrip = (trip, id) => {
    fetch(`/trips/${id}`, {
      body: JSON.stringify(trip),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      console.log(response)
      if(response.status === 422){
        alert("There is something wrong with your submission.")
      }
      return response.json()
    })
    .then(() => {
      this.indexTrips()
    })
    .catch(errors => {
      console.log("edit errors:", errors)
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
        <Router>
          <Header
            new_user_route={new_user_route}
            sign_in_route={sign_in_route}
            sign_out_route={sign_out_route}
          />

          <Switch>
            {!logged_in && <Route exact path="/" component={LandingPage} />}
            {logged_in && <Route exact path="/" component={Dash} />}
            <Route path="/about" component={AboutUs} />
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
                return <TripShow trip={trip} sights={this.state.sights} />;
              }}
            />
            <Route
              path="/sightnew/:id"
              render={(props) => {
                let id = +props.match.params.id;
                let trip = this.state.trips.find((trip) => trip.id === id);
                return <SightNew createSight={this.createSight} trip={trip} />;
              }}
            />
            <Route
              path="/newtrip"
              render={(props) => (
                <TripNew
                  createNewTrip={this.createNewTrip}
                  current_user={current_user}
                />
              )}
            />
            <Route path={"/tripedit/:id"} render={ (props) => {
            let id =props.match.params.id
            let trip = this.state.trips.find(trip => trip.id === +id)
            return <TripEdit editTrip={ this.editTrip } trip={ trip } user={current_user}/>
          }} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
