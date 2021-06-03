import Taro from "@tarojs/taro";

const func = async (name, data) => {
  Taro.showLoading({
    title: "加载中"
  });

  try {
    let res = await Taro.cloud.callFunction({
      name: name,
      data: data
    });
    Taro.hideLoading();
    console.log(res);
    if (res.result.code < 40000) {
      return res.result;
    }
    if (res.result.code >= 40000) {
      Taro.showToast({
        title: res.result.msg,
        icon: "error",
        duration: 2000
      });
      return res.result;
    }
  } catch (err) {
    Taro.showToast({
      title: err,
      icon: "error",
      duration: 2000
    });
  }
};

const getConfig = async () => {
  const url =
    "https://3pp.starbucks.com.cn/wxmem/index/promotion/infos?sign=78cf47cd880399962518e39407eea7395008277289a1ddbf8f403cd9feba2152&adCode=0&latitude=26.0527&longitude=119.31414";
  let res = await Taro.request({
    url
  });
  return res;
};

const getUserInfo = async () => {
  func("");
};

const checkFirstLogin = async () => {
  return func("checkFirstLogin");
};

const checkSmsCode =()=>{
  return func("checkSmsCode");
}
export { getConfig, getUserInfo, checkFirstLogin,checkSmsCode };
