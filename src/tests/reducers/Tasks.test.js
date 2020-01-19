import tasksReducer from "../../reducers/Tasks";
import Tasks from "../fixtures/tasks";

test("should set default state", () => {
  const state = tasksReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([Tasks[0], Tasks[1], Tasks[2]]);
});

test("should remove task by id", () => {
  const action = {
    type: "REMOVE_TASK",
    id: Tasks[0].id
  };

  const state = tasksReducer(Tasks, action);
  expect(state).toEqual([Tasks[1], Tasks[2]]);
});

test("should not remove task if id not found", () => {
  const action = {
    type: "REMOVE_TASK",
    id: "-1"
  };

  const state = tasksReducer(Tasks, action);
  expect(state).toEqual(Tasks);
});

test("should add task with provided values", () => {
  const task = {
    id: 3,
    description: "blabla",
    category: "work"
  };

  const action = {
    type: "ADD_TASK",
    task
  };

  const state = tasksReducer(Tasks, action);
  expect(state).toEqual([...Tasks, task]);
});
