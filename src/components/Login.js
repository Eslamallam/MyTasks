import React from "react";
import { connect } from "react-redux";
import { login, getUserInfo } from "../actions/Auth";
import axios from "axios";
import "../styles/login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      AuthUsername: "",
      AuthUserPassword: "",
      error: ""
    };
  }

  componentDidMount() {
    axios.get("./UserCredentials.json").then(res => {
      this.setState(() => ({
        AuthUsername: res.data[0].username,
        AuthUserPassword: res.data[0].password
      }));
    });
  }

  onUsernameChange = e => {
    const username = e.target.value;
    this.setState(() => ({ username, error: "" }));
  };

  onPasswordChange = e => {
    const password = e.target.value;
    this.setState(() => ({ password, error: "" }));
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, password, AuthUserPassword, AuthUsername } = this.state;

    if (!username || !password) {
      this.setState(() => ({
        error: "Please enter your credentials to login"
      }));
    } else if (username !== AuthUsername || password !== AuthUserPassword) {
      this.setState(() => ({
        error: "Invalid credentials"
      }));
    } else {
      this.props.dispatch(getUserInfo());
      this.props.dispatch(login());
      this.props.history.push("/profile");
    }
  };

  render() {
    return (
      <div className="box-layout">
        {this.state.error && <div className="error">{this.state.error}</div>}
        <form onSubmit={this.onSubmit}>
          <h1>MyTasks</h1>
          <p>Login to manage your tasks </p>
          <input
            type="text"
            placeholder="Enter a username"
            value={this.state.username}
            onChange={this.onUsernameChange}
          />
          <br />
          <input
            type="password"
            placeholder="Enter a password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  credentials: state.auth
});

export default connect(mapStateToProps)(Login);
