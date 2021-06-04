import { createActions, handleActions, combineActions } from 'redux-actions';
import { checkFirstLogin,register } from "@/request";
import { RECEIVE_USER_INFO, GET_USER_INFO } from "@/store/constants";

export const getUserInfo = () => {
  return {
    type: GET_USER_INFO
  };
};
export const receiveUserInfo = userInfo => {
  console.log('receiveUserInfo:');
  return {
    type: RECEIVE_USER_INFO,
    userInfo
  };
};

const defaultUserInfoState = { };

const { reqUserInfo, decrement } = createActions({
  REQUSET_USERINFO: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount })
});

// export const reducer = handleActions(
//   {
//     [combineActions(reqUserInfo, decrement)]: (
//       state,
//       { payload: { amount } }
//     ) => {
//       return { ...state, isLogin: true};
//     }
//   },
//   defaultUserInfoState
// );

// 异步的 action
export const registerUserInfo = userInfo => dispatch => {
  return register({userInfo}).then(res => {
    console.log(res);
    if(res.code ===20000) {
      dispatch({type:RECEIVE_USER_INFO,playload:{userInfo:res.userInfo,isLogin:true}})
      return
    }
  });
};
export const requestUserInfo = code => dispatch => {
  return checkFirstLogin().then(res => {
    console.log('registerUserInfo',res);
    if(res.code ===20000) {
      dispatch({type:RECEIVE_USER_INFO,playload:res.userInfo})
      return
    }
  });
};