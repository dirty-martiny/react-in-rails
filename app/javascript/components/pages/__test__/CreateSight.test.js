import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CreateSight from "../CreateSight";

Enzyme.configure({ adapter: new Adapter() });

describe("When create sight renders", () => {
  it("render the sight new components", () => {
    const createSight = shallow(<CreateSight />);

    const sightNewComponent = createSight.find("SightNew");

    expect(sightNewComponent.length).toEqual(1);
  });
});
