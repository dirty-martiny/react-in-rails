import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TripEdit from "../TripEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When TripEdit renders", () => {
  const mockuser = {
    id: 1,
    email: "email@email.com",
    password: "123123",
    password_confirmation: "123123",
  };

  const mockTrip = {
    id: 1,
    trip_name: "Getting some sun",
    trip_location: "Jamaica",
    trip_date_range: "12/20/2021 - 1/5/2022",
    is_public: true,
    user_id: mockuser.id,
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

  const tripEdit = shallow(<TripEdit trip={mockTrip} user={mockuser} />);

  it("displays a heading", () => {
    const title = tripEdit.find("h1");
    expect(title.text()).toEqual("Edit Your Trip");
  });

  it("displays 7 labels", () => {
    const labels = tripEdit.find("Label");
    expect(labels.length).toEqual(4);
  });

  it("displays 7 inputs", () => {
    const inputs = tripEdit.find("Input");
    expect(inputs.length).toEqual(4);
  });

  it("displays a button that says edit sight", () => {
    const button = tripEdit.find("Button");
    expect(button.length).toEqual(1);
    expect(button.props().children).toEqual("Update Trip");
  });
});
