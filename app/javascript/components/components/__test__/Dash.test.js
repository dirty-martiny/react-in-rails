import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dash from "../Dash";

Enzyme.configure({ adapter: new Adapter() });

describe("When dash renders", () => {
  const mockuser = {
    email: "email@email.com",
    password: "123123",
    password_confirmation: "123123",
  };
  const mocktrips = [
    {
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
    },
  ];
  it("displays welcome message to user", () => {
    const dash = shallow(<Dash trips={mocktrips} user={mockuser} />);

    const dashWelcomeMess = dash.find("h1");

    expect(dashWelcomeMess.length).toEqual(1);
  });
});
