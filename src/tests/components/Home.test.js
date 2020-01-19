import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";
import Home from "../../components/Home";

configure({ adapter: new Adapter() });

test("should render Home correctly", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find("h1").text()).toBe("My Tasks");
  expect(toJSON(wrapper)).toMatchSnapshot();
});
