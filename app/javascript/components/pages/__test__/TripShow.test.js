import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TripShow from "../TripShow";

Enzyme.configure({ adapter: new Adapter() });

describe("When TripShow renders", () => {
  it("displays TripShow heading", () => {
    const trip = shallow(<TripShow />);

    const tripShowHeading = trip.find("h1");

    expect(tripShowHeading.text(1)).toEqual("Trip Show");
  });
});
