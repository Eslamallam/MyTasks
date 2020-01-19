import { createStore, combineReducers } from "redux";
import taskReducer from "../reducers/Tasks";
import authReducer from "../reducers/Auth";

export default () => {
  const store = createStore(
    combineReducers({
      tasks: taskReducer,
      auth: authReducer
    })
  );

  return store;
};
