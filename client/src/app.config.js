export default {
  pages: ["pages/index/index","pages/center/index","pages/login/index"],
  tabBar: {
    selectedColor: "#006241",
    color: "#000",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./images/home.png",
        selectedIconPath: "./images/home.png"
      },
      {
        pagePath: "pages/center/index",
        text: "我的",
        iconPath: "./images/center.png",
        selectedIconPath: "./images/center.png"
      }
    ]
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  }
};
