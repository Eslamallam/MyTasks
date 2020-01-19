import authReducer from "../../reducers/Auth";
import userInfo from "../fixtures/userInfo";

test("should get user basic info", () => {
  const action = {
    type: "GET_USER_INFO"
  };

  const state = authReducer(null, action);
  expect(state).toEqual(userInfo[0]);
});

test("should loggedin state be equal true", () => {
  const action = {
    type: "LOGIN"
  };

  const state = authReducer(null, action);
  expect(state).toEqual({ isLoggedin: true });
});

test("should loggedin state be equal false", () => {
  const action = {
    type: "LOGOUT"
  };

  const state = authReducer(null, action);
  expect(state).toEqual({ isLoggedin: false });
});
