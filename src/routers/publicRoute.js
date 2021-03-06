import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? (
          <div>
            <Redirect to="/home" />
          </div>
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isLoggedin
});

export default connect(mapStateToProps)(PublicRoute);
