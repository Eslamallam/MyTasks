import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/Auth";
import "../styles/profile.css";

export const Profile = props => {
  const { name, email } = props.userInfo;

  return (
    <div className="profile-box">
      <h1>Welcome</h1>
      <h4>Don't Share your data with anyone</h4>
      <p>Name: {name}</p>
      <p>E-mail: {email}</p>
      <button
        onClick={() => {
          props.dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  userInfo: state.auth
});

export default connect(mapStateToProps)(Profile);
