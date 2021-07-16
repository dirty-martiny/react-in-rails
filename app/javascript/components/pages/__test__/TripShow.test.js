import React from "react";
import Enzyme, { shallow, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StaticRouter as Router } from "react-router-dom";
import TripShow from "../TripShow";

Enzyme.configure({ adapter: new Adapter() });

describe("When TripShow renders", () => {
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
 const tripShow = render(
   <Router>
     <TripShow trip={mockTrip} logged_in={true} user={mockuser} />
   </Router>
 );

  it("displays TripShow heading", () => {
    const tripShowHeading = tripShow.find("h1");
    expect(tripShowHeading.text()).toEqual("Trip Show");
  });
    it("displays sight' name", () => {
      const tripName = tripShow.find("h5");
      expect(tripName.text()).toEqual("Taco Bell");
    });
    it("displays sight' name", () => {
      const tripName = tripShow.find("h6");
      expect(tripName.text()).toEqual("222-222-2222");
    });
    // it("displays a delete button", () => {
    //   const button = tripShow.find("Button");
    //   expect(button.length).toEqual(1);
    //   expect(button.props().children).toEqual("Edit");
    // });
});
