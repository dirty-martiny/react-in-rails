import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import YourTrip from "../YourTrips";

Enzyme.configure({ adapter: new Adapter() });

describe("When your trips renders", () => {
  const mockuser = {
    email: "email@email.com",
    password: "123123",
    password_confirmation: "123123",
  };

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

  const yourTrip = shallow(<YourTrip trip={mockTrip} user={mockuser} />);

  it("displays Your Trips title", () => {
    const yourTripHeading = yourTrip.find("h2");

    expect(yourTripHeading.text()).toEqual("Your Trips");
  });

  it("displays trips' name", () => {
    const cardTitle = yourTrip.find("CardTitle");
    console.log(cardTitle);
  });
});
