import userInfo from "../Data/ProfileInfo.json";

export default (state = [], action) => {
  switch (action.type) {
    case "GET_USER_INFO":
      return userInfo;
    case "LOGIN":
      return {
        ...state,
        isLoggedin: true
      };
    case "LOGOUT":
      return {
        isLoggedin: false
      };
    default:
      return state;
  }
};
