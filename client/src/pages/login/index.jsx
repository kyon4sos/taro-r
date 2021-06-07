import { Text, View, Image } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AtInput, AtButton } from "taro-ui";
import { requestUserInfo, registerUserInfo } from "@/store/actions";
import { Main } from "@/components";
import {
  desePhone,
  switchTab,
  showError,
  showSuccess,
  wxGetUserProfile
} from "@/utils";
import "./index.scss";

function Login(props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();
  useEffect(() => {
    let { params } = router;
    console.log(router);
    let navType = params.navType || "";
    if (navType === "tabbar") {
    }
    dispatch(requestUserInfo());
  }, []);

  const onChange = val => {
    setCode(val);
  };
  const onConfirm = async () => {
    // let ret  = await  checkSmsCode()
    // dispatch({ type: "ADD", playload: 1 });
    showSuccess("验证成功");
    // setTimeout(() => {
    //   switchTab("/pages/index/index");
    // }, 1500);
  };
  const onRegister = async () => {
    try {
      let res = await wxGetUserProfile();
      console.log(res);
      dispatch(registerUserInfo(res.userInfo));
    } catch (err) {
      console.log(err);
      showError("请点击允许授权");
    }
  };
  const GetUserProfile = () => {
    return (
      <View className="no-login">
        <Image
          className="avatar"
          src="https://6e6f-note-9gpvzagz1944b75f-1258879474.tcb.qcloud.la/no_login.png?sign=e34a712c47952d8b595caa23c4792f33&t=1622801104"
        ></Image>
        <AtButton onClick={onRegister} type="primary">
          登录
        </AtButton>
      </View>
    );
  };

  const ValidateSmsCode = () => {
    return (
      <View>
        <Text className="tip">
          为了保护账号的安全，需要先验证您当前的手机号{desePhone(phone)}
        </Text>
        <AtInput
          className="mb-1 "
          clear
          autoFocus
          focus
          title="验证码"
          type="text"
          maxLength="6"
          value={code}
          onChange={onChange}
          placeholder="请输入6位短信验证码"
        ></AtInput>
        <AtButton
          disabled={code.length == 6 ? false : true}
          onClick={onConfirm}
          type="primary"
        >
          确认
        </AtButton>
      </View>
    );
  };
  return <Main>{user.isLogin ? <ValidateSmsCode /> : <GetUserProfile />}</Main>;
}

export default Login;
