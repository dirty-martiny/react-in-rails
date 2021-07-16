import React from "react";
import Enzyme, { shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StaticRouter as Router } from "react-router-dom";
import SightNew from "../SightNew";

Enzyme.configure({ adapter: new Adapter() });

describe("When sightNew renders", () => {
  const mockTrip = {
    trip_name: "Getting some sun",
    trip_location: "Jamaica",
    trip_date_range: "12/20/2021 - 1/5/2022",
    is_public: false,
    user_id: 1,
    sights: [
      {
        name: "Taco Bell",
        address1: "Bell Street",
        city: "Taco",
        zip_code: "11111",
        state: "Jamaica Land",
        country: "Jamaica",
        phone: "222-222-2222",
        trip_id: 1,
      },
    ],
  };

  const sightNew = shallow(<SightNew trip={mockTrip} />);

  it("displays a heading", () => {
    const title = sightNew.find("h1");
    expect(title.text()).toEqual("Add A New Sight");
  });

  it("displays 7 labels", () => {
    const labels = sightNew.find("Label");
    expect(labels.length).toEqual(7);
    expect(labels.debug().includes("Name of Sight")).toEqual(true);
    expect(labels.debug().includes("Street Address")).toEqual(true);
    expect(labels.debug().includes("City")).toEqual(true);
    expect(labels.debug().includes("Zipcode")).toEqual(true);
    expect(labels.debug().includes("State")).toEqual(true);
    expect(labels.debug().includes("Country")).toEqual(true);
    expect(labels.debug().includes("Phone Number")).toEqual(true);
  });

  it("displays 7 inputs", () => {
    const inputs = sightNew.find("Input");
    expect(inputs.length).toEqual(7);
    expect(inputs.debug().includes("name")).toEqual(true);
    expect(inputs.debug().includes("address1")).toEqual(true);
    expect(inputs.debug().includes("city")).toEqual(true);
    expect(inputs.debug().includes("zip_code")).toEqual(true);
    expect(inputs.debug().includes("state")).toEqual(true);
    expect(inputs.debug().includes("country")).toEqual(true);
    expect(inputs.debug().includes("phone")).toEqual(true);
  });

  it("displays a button that says edit sight", () => {
    const button = sightNew.find("Button");
    expect(button.length).toEqual(1);
    expect(button.props().children).toEqual("Add To Trip");
    expect(button.debug().includes("submit")).toEqual(true);
  });
});
