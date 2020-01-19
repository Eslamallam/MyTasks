import { addNewTask, removeTask } from "../../actions/Task";

test("should setup remove task", () => {
  const action = removeTask({ id: "1234" });
  expect(action).toEqual({
    type: "REMOVE_TASK",
    id: "1234"
  });
});

test("should setup add task with provided values", () => {
  const data = {
    description: "run for 2 km",
    category: "sport"
  };

  const action = addNewTask(data);

  expect(action).toEqual({
    type: "ADD_TASK",
    task: {
      id: expect.any(String),
      ...data
    }
  });
});

test("should setup add task with default values", () => {
  const action = addNewTask();
  expect(action).toEqual({
    type: "ADD_TASK",
    task: {
      id: expect.any(String),
      description: "",
      category: ""
    }
  });
});
