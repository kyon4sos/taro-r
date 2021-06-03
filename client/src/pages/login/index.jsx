import { View, Text } from "@tarojs/components";
import { useEffect, useState } from "react";
import { getCurrentInstance } from "@tarojs/taro";
import { AtInput, AtButton } from "taro-ui";
import { Main } from "@/components";
import {desePhone} from '@/utils'
import "./index.scss";

function Login(props) {
  const [phone, setPhone] = useState("");
  const [code,setCode] = useState("")
  useEffect(() => {
    const { mobile } = getCurrentInstance().router.params;
    setPhone(mobile);
  },[]);
  
  const handleChange = (val)=>{
    setCode(val)
    console.log(code);
  }
  return (
    <Main>
      <Text className='tip'>为了保护账号的安全，需要先验证您当前的手机号{desePhone(phone)}</Text>
      <AtInput className='mb-1 '
        clear
        autoFocus
        focus
        title='验证码'
        type='text'
        maxLength='6'
        value={code}
        onChange={handleChange}
        placeholder='请输入短信验证码'
      ></AtInput>
      <AtButton disabled={code.length ==6? false : true} type='primary'>
        确认
      </AtButton>
    </Main>
  );
}

export default Login;
