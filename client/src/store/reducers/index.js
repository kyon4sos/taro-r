import { combineReducers } from "redux";
import actionTypes from "@/store/constants";
import {  handleActions, combineActions } from "redux-actions";

const initialState = {
  userInfo: { nickName: "游客" },
  isLogin:false
};

const user = handleActions({
  [actionTypes.GET_USER_INFO]: (state, action) => {
    return {
      ...state,
      isLogin:true,
      userInfo:action.playload
    };
  },
}, initialState);


export default combineReducers({
  user,
});
