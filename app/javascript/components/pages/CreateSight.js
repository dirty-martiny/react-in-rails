import React, { Component } from "react";
import SightNew from "./SightNew";
import YelpSearch from "./YelpSearch";

export default class CreateSight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSight: {

      }
    }
  }
  
  handleSetNewSight = (newSight) => {
    console.log(newSight.location)
    this.setState({newSight})
  }

  render() {
    const { createSight, trip, sightSearch, businesses } = this.props;
    return (
      <div className="create-sight-container">
        <SightNew createSight={createSight} trip={trip} newSight={this.state.newSight}/>
        <YelpSearch sightSearch={sightSearch} businesses={businesses} handleSetNewSight={this.handleSetNewSight} />
      </div>
    );
  }
}
