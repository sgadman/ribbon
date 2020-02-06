import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import App from "../App";

describe("<App />", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should match snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
