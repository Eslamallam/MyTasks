import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "./index.css";
import AppRouter from "./routers/AppRouter";

const store = configureStore();

//const state = store.getState();
//console.log(state);

const MyApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
