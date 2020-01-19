import React from "react";
import { addNewTask } from "../actions/Task";
import TaskForm from "./TaskForm";
import { connect } from "react-redux";

const AddTask = props => {
  return (
    <TaskForm
      onSubmit={task => {
        props.dispatch(addNewTask(task));
        props.history.push("/tasks");
      }}
    />
  );
};

export default connect(null)(AddTask);
