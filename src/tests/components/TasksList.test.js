import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";
import { TasksList } from "../../components/TasksList";
import Tasks from "../fixtures/tasks";

configure({ adapter: new Adapter() });

test("should render task list with tasks", () => {
  const wrapper = shallow(<TasksList tasks={Tasks} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
