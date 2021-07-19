import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CreateSight from "../CreateSight";

Enzyme.configure({ adapter: new Adapter() });

describe("When create sight renders", () => {
  it("render the 2 components", () => {
    const createSight = shallow(<CreateSight />);

    const sightNew = createSight.find("SightNew");
    const yelpSearch = createSight.find("YelpSearch");

    expect(sightNew.length).toEqual(1);
    expect(yelpSearch.length).toEqual(1);
  });
});
