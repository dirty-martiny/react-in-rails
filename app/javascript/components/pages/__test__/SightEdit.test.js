import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SightEdit from "../SightEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When SightEdit renders", () => {
  const mockSight = {
    name: "Taco Bell",
    address1: "Bell Street",
    city: "Taco",
    zip_code: "11111",
    state: "Jamaica Land",
    country: "Jamaica",
    phone: "222-222-2222",
    trip_id: 1,
  };

  const sightEdit = shallow(<SightEdit sight={mockSight} />);

  it("displays a heading", () => {
    const title = sightEdit.find("h1");
    expect(title.text()).toEqual("Edit Your Sight");
  });

  it("displays 7 labels", () => {
    const labels = sightEdit.find("Label");
    expect(labels.length).toEqual(7);
  });

  it("displays 7 inputs", () => {
    const inputs = sightEdit.find("Input");
    expect(inputs.length).toEqual(7);
  });

  it("displays a button that says edit sight", () => {
    const button = sightEdit.find("Button");
    expect(button.length).toEqual(1);
    expect(button.props().children).toEqual("Edit Sight");
  });
});
