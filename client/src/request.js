import Taro from "@tarojs/taro";
import {func } from '@/utils'

const getConfig = async () => {
  const url =
    "https://3pp.starbucks.com.cn/wxmem/index/promotion/infos?sign=78cf47cd880399962518e39407eea7395008277289a1ddbf8f403cd9feba2152&adCode=0&latitude=26.0527&longitude=119.31414";
  let res = await Taro.request({
    url
  });
  return res;
};

const getUserInfo = async () =>{
  func('')
}

export { getConfig,getUserInfo };
