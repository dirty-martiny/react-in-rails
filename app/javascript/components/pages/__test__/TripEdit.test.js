import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TripEdit from "../TripEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When TripEdit renders", () => {
    const mockTrip = {
      trip_name: "Getting some sun",
      trip_location: "Jamaica",
      trip_date_range: "12/20/2021 - 1/5/2022",
      is_public: false,
      user_id: 1
    };
  it("displays TripEdit heading", () => {
    const trip = shallow(<TripEdit trip={mockTrip} />);

    const tripEditHeading = trip.find("h1");

    expect(tripEditHeading.text()).toEqual("Trip Edit Page");
  });
});
