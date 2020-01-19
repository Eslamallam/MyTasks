import uuid from "uuid";

// ADD_TASK
export const addNewTask = ({ description = "", category = "" } = {}) => ({
  type: "ADD_TASK",
  task: {
    id: uuid(),
    category,
    description
  }
});

// REMOVE_TASK
export const removeTask = ({ id } = {}) => ({
  type: "REMOVE_TASK",
  id
});
