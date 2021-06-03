import Taro from "@tarojs/taro";

const func = (name, data) => {
  return Taro.cloud.callFunction({
    // 要调用的云函数名称
    name: name,
    // 传递给云函数的event参数
    data: data
  });
};

//手机号码脱敏
const desePhone =( phone ="") => {
 return phone.split("").map((item, idx) => {
    if (idx >=3 && idx < 7) {
      item = "*"
    }
    return item
  }).join("")
};
export { func,desePhone };
