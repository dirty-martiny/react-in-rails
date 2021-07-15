import React from "react";
import Enzyme, { shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StaticRouter as Router } from "react-router-dom";

import YourTrips from "../YourTrips";

Enzyme.configure({ adapter: new Adapter() });

describe("When your trips renders", () => {
  const mockuser = {
    id: 1,
    email: "email@email.com",
    password: "123123",
    password_confirmation: "123123",
  };

  const mockTrip = [
    {
      id: 1,
      trip_name: "Getting some sun",
      trip_location: "Jamaica",
      trip_date_range: "12/20/2021 - 1/5/2022",
      is_public: false,
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
    },
  ];

  const yourTrip = render(
    <Router>
      <YourTrips trips={mockTrip} user={mockuser} />
    </Router>
  );

  it("displays Your Trips title", () => {
    const yourTripHeading = yourTrip.find("h2");
    expect(yourTripHeading.text()).toEqual("Your Trips");
  });

  it("displays trips' name", () => {
    const tripName = yourTrip.find("h5");
    expect(tripName.text()).toEqual("Getting some sun");
  });
});
