import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "../NotFound";

Enzyme.configure({ adapter: new Adapter() });

describe("When not found renders", () => {
  it("displays a heading that displays 404:", () => {
    const notFound = shallow(<NotFound />);

    const notFoundheader = notFound.find("h1");

    expect(notFoundheader.text()).toEqual("404:");
  });
});
