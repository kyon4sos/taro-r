import { createActions  } from 'redux-actions';
import { checkFirstLogin,register } from "@/request";
import actionTypes from "@/store/constants";
// 异步的 action
export const registerUserInfo = userInfo => dispatch => {
  return register({userInfo}).then(res => {
    console.log(res);
    if(res.code ===20000) {
      dispatch({type:actionTypes.RECEIVE_USER_INFO,playload:{userInfo:res.userInfo,isLogin:true}})
      return
    }
  });
};
export const requestUserInfo = code => dispatch => {
  return checkFirstLogin().then(res => {
    if(res.code ===20000) {
      dispatch({type:actionTypes.GET_USER_INFO,playload:res.userInfo})
      return
    }
  });
};