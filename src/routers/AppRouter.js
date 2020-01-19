import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "../components/Home";
import TasksList from "../components/TasksList";
import Login from "../components/Login";
import Profile from "../components/Profile";
import AddTask from "../components/AddTask";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

const AppRourer = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PublicRoute path="/" component={Login} exact={true} />
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/tasks" component={TasksList} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/createtask" component={AddTask} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRourer;
