import { combineReducers } from "redux";
import { RECEIVE_USER_INFO, GET_USER_INFO } from "@/store/constants";

const userInfoState = {
  userInfo: {},
  isLogin: false
};

function userInfo(state = userInfoState, action) {
  switch (action.type) {
    case RECEIVE_USER_INFO:
      console.log("userInfo", action);
      return {
        userInfo: { ...action.playload },
        isLogin: true
      };
    case GET_USER_INFO:
      return {
        userInfo: { ...action.playload },
      };
    default:
      return state;
  }
}

export default combineReducers({
  userInfo
});
