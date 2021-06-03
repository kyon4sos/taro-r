import Taro from "@tarojs/taro";

const func = (name, data) => {
  Taro.cloud
    .callFunction({
      // 要调用的云函数名称
      name: name,
      // 传递给云函数的event参数
      data: data
    })
    .then(res => {
      console.log(res);
      // output: res.result === 3
    })
    .catch(err => {
      console.log(err);
      // handle error
    });
};
export { func };
