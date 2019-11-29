import {shallow} from "enzyme";

import {NumberButton} from "../components/NumberButton.component";
import React from "react";


it("Outputs NumberButton className value", () => {
  const wrapper = shallow(<NumberButton name="1" />);
  expect(wrapper.hasClass("number")).toEqual(true);
});
