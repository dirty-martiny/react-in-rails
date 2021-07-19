import React from "react";
import Enzyme, { shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StaticRouter as Router } from "react-router-dom";
import TripNew from "../TripNew";

Enzyme.configure({ adapter: new Adapter() });

describe("When tripNew renders", () => {
  const mockuser = {
    id: 1,
    email: "email@email.com",
    password: "123123",
    password_confirmation: "123123",
  };

  const tripNew = shallow(<TripNew current_user={mockuser} />);

  it("displays a heading", () => {
    const title = tripNew.find("h1");
    expect(title.text()).toEqual("Add a Trip");
  });

  it("displays 7 labels", () => {
    const labels = tripNew.find("Label");

    let labelsText = [
      "Trip Name",
      "Trip Location",
      "Trip date range",
      "Check to show your trip to everyone",
    ];

    expect(labels.length).toEqual(4);

    labelsText.map((text, index) => {
      expect(labels.at(index).props().children).toEqual(text);
    });
  });

  it("displays 7 inputs", () => {
    const inputs = tripNew.find("Input");

    let inputsText = [
      "trip_name",
      "trip_location",
      "trip_date_range",
      "is_public",
    ];

    inputsText.map((text, index) => {
      expect(inputs.at(index).props().name).toEqual(text);
    });
  });

  it("displays a button that says edit sight", () => {
    const button = tripNew.find("Button");
    expect(button.props().children).toEqual("Add a New Trip");
  });
});
