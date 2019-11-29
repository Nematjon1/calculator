import {shallow} from "enzyme";

import {Display} from "../components/Display.component";
import React from "react";


it("Outputs Display component value", () => {
  const wrapper = shallow(<Display currentNum="1" />);
  expect(wrapper.props()).toStrictEqual({
    children: "1",
    className: "display display__notEmpty"
  });
});

