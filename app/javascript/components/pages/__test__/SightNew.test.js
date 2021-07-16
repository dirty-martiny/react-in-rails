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

  //   const sightNew = shallow(<SightNew trip={mockTrip} />);
  const sightNew = render(
    <Router>
      <SightNew trip={mockTrip} />
    </Router>
  );

  it("displays a heading", () => {
    const title = sightNew.find("h1");
    expect(title.text()).toEqual("Add A New Sight");
  });

  it("displays 7 labels", () => {
    const labels = sightNew.find("Label");
    expect(labels.length).toEqual(7);
    expect(labels.html()).toEqual("Name of Sight");
    console.log(labels);
  });

  it("displays 7 inputs", () => {
    const inputs = sightNew.find("Input");
    expect(inputs.length).toEqual(7);
  });

  it("displays a button that says edit sight", () => {
    const button = sightNew.find("Button");
    expect(button.length).toEqual(1);
    // expect(button.props().children).toEqual("Add To Trip");
  });
});
