import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";
import { Profile } from "../../components/Profile";
import userInfo from "../fixtures/userInfo";

configure({ adapter: new Adapter() });

test("should render task list with tasks", () => {
  const wrapper = shallow(<Profile userInfo={userInfo} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
