import React, { useState, useEffect,useMemo } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtAvatar, AtProgress } from "taro-ui";
import { showError } from "@/utils";
import { getConfig } from "@/request";

import { NCard, NavCard, Carousel, Main } from "@/components";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { navigate, showSuccess } from "../../utils";

const menuInfo = {
  label: "",
  description: "",
  image: "",
};
const Ads = React.memo((props) => {
  let imgs = props.imgs || [];
  return (
    <View className="ads-wrapper">
      <Carousel className="ads" imgs={imgs} />
    </View>
  );
});

const Login = React.memo(() => {
  const onLogin = () => {
    navigate("/pages/login/index");
    // if (res.code === 20001) {
    //   return;
    // }
    // if (res.code === 20000) {
    //   navigate("/pages/login/index?mobile=12345678901");
    //   return;
    // }
  };
  return (
    <NCard className="mb-1 login-card" onClick={onLogin}>
      <Text>即刻入会，尊享好礼</Text>
      <Text>登录 / 注册</Text>
    </NCard>
  );
});

const UserInfo = ({ userInfo }) => {

  const onSwitch = () => {
    navigate("/pages/login/index");
    // if (res.code === 20001) {
    //   return;
    // }
    // if (res.code === 20000) {
    //   navigate("/pages/login/index?mobile=12345678901");
    //   return;
    // }
  };
  console.log(userInfo);
  return (
    <NCard className="mb-1 user-card login-card" onClick={onSwitch}>
      <AtAvatar circle image={userInfo.avatarUrl}></AtAvatar>
      <Text className="username">{userInfo.nickName}</Text>
    </NCard>
  );
}
const PurchaseCard = React.memo((props) => {
  const handleClick = (e) => {
    let { index = 0 } = e.currentTarget.dataset;
    if (index == 1) {
      showError("开发中");
      return;
    }
    if (index == 2) {
      showError("开发中");
      return;
    }
  };
  const {
    newMenu = {
      mop: { label: "", image: "" },
      mod: { label: "", image: "" },
    },
  } = props;
  return (
    <NCard className="mb-1 purchase-card">
      <View className="left" data-index="1" onClick={handleClick}>
        <View className="slogan">{newMenu.mop.label}</View>
        <Image className="img" mode="widthFix" src={newMenu.mop.image}></Image>
      </View>
      <View className="right" data-index="2" onClick={handleClick}>
        <View className="slogan">{newMenu.mod.label}</View>
        <Image className="img" mode="widthFix" src={newMenu.mod.image}></Image>
      </View>
    </NCard>
  );
});
const createNavs = (newMenu) => {
  return Object.values(newMenu)
    .filter((item) => !item.label)
    .map((item) => {
      if (!item.image) {
        item.image = newMenu.order.image;
      }
      return item;
    });
};

function Index(props) {
  const isLogin = useSelector(state=>state.user.isLogin)
  const userInfo = useSelector(state=>state.user.userInfo)
  const [banners, setBanners] = useState([]);
  const [ads, setAds] = useState([]);
  const [navs, setNavs] = useState([]);
  const [newMenus, setNewMenus] = useState({
    mop: menuInfo,
    mod: menuInfo,
    moment: menuInfo,
    wsg: menuInfo,
    order: menuInfo,
  });
  useEffect(() => {
    getConfig().then((res) => {
      const { banner, newMenu, ad } = res.data.data;
      setBanners(banner);
      setNewMenus({ ...newMenu });
      setAds(ad);
      setNavs(createNavs(newMenu));
    });
  }, []);

  const onNavigate = (val, e) => {
    switch (val) {
      case 0:
        showSuccess("暂时没福利");
        break;
      case 1:
        showSuccess("心意不够");
        break;
      case 2:
        showSuccess("还是没福利");
        break;
    }
  };

  return (
    <View>
      <Carousel imgs={banners} />
      <Main>
        {isLogin ? <UserInfo userInfo={userInfo}/> : <Login />}
        <PurchaseCard newMenu={newMenus} />
        <NavCard navs={navs} onClick={onNavigate} />
        <Ads imgs={ads} />
      </Main>
    </View>
  );
}
export default Index;
