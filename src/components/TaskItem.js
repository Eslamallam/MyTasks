import React from "react";
import { connect } from "react-redux";
import { removeTask } from "../actions/Task";
import "../styles/tasks.css";

const TaskItem = ({ id, category, description, dispatch }) => {
  return (
    <div className="task-item">
      <h2>{description}</h2>
      <span>category: {category}</span>{" "}
      <button
        onClick={() => {
          dispatch(removeTask({ id }));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect(null)(TaskItem);
