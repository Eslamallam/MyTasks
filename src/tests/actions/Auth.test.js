import { login, logout } from "../../actions/Auth";

test("should set loggedin state to true", () => {
  const action = login();
  expect(action).toEqual({ type: "LOGIN" });
});

test("should set loggedin state to false", () => {
  const action = logout();
  expect(action).toEqual({ type: "LOGOUT" });
});
