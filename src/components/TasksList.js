import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import TaskItem from "./TaskItem";
import "../styles/tasks.css";

export const TasksList = props => {
  return (
    <div className="task-list">
      <NavLink className="nav-item" to="/createtask">
        Create New
      </NavLink>
      {props.tasks.length > 0 ? (
        props.tasks.map(task => {
          return <TaskItem key={task.id} {...task} />;
        })
      ) : (
        <p>"There is no tasks to show"</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(TasksList);
