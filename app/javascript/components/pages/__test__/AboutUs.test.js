import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AboutUs from "../AboutUs";

Enzyme.configure({ adapter: new Adapter() });

describe("When AboutUs renders", () => {
  it("displays a heading that displays About Us", () => {
    const aboutUs = shallow(<AboutUs />);

    const aboutUsHeading = aboutUs.find("h2");

    expect(aboutUsHeading.text()).toEqual("About Us");
  });
});
