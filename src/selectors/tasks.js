import moment from "moment";

export const getTasksByDay = (tasks, date) => {
  return tasks.filter(task => {
    const createdAt = moment(task.createdAt);
    const startDateMatch = date ? date.isSame(createdAt, "day") : true;

    return startDateMatch;
  });
};
