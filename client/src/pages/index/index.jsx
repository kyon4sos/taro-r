import { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro, { showToast } from "@tarojs/taro";
import { showError } from "@/utils";
import { getConfig, checkFirstLogin } from "@/request";
import { NCard, NavCard, Carousel, Main } from "@/components";

import "./index.scss";
import { showSuccess } from "../../utils";

function Index() {
  const menuInfo = {
    label: "",
    description: "",
    image: ""
  };

  const [banners, setBanners] = useState([]);
  const [ads, setAds] = useState([]);
  const [navs, setNavs] = useState([]);
  const [newMenus, setNewMenus] = useState({
    mop: menuInfo,
    mod: menuInfo,
    moment: menuInfo,
    wsg: menuInfo,
    order: menuInfo
  });

  const createNavs = newMenu => {
    return Object.values(newMenu)
      .filter(item => !item.label)
      .map(item => {
        if (!item.image) {
          item.image = newMenu.order.image;
        }
        return item;
      });
  };

  useEffect(() => {
    getConfig().then(res => {
      const { banner, newMenu, ad } = res.data.data;
      setBanners(banner);
      setNewMenus({ ...newMenu });
      setAds(ad);
      setNavs(createNavs(newMenu));
    });
  }, []);
  const check = () => {};
  const Ads = props => {
    let imgs = props.imgs || [];
    return (
      <View className='ads-wrapper'>
        <Carousel className='ads' imgs={imgs} />
      </View>
    );
  };

  const Login = () => {
    return (
      <NCard className='mb-1 login-card' onClick={onLogin}>
        <Text>即刻入会，尊享好礼</Text>
        <Text onClick={onLogin}>登录 / 注册</Text>
      </NCard>
    );
  };

  const onLogin = async () => {
    let res = await checkFirstLogin();
    console.log(res.code);
    if (res.code === 20001) {
      return;
    }
    if (res.code === 20000) {
      Taro.navigateTo({
        url: "/pages/login/index?mobile=12345678901"
      });
    }
  };
  const onNavigate = (val, e) => {
    console.log(val, e);
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
  const PurchaseCard = props => {
    const handleClick = e => {
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
      newMenu = { mop: { label: "", image: "" }, mod: { label: "", image: "" } }
    } = props;
    return (
      <NCard className='mb-1 purchase-card'>
        <View className='left' data-index='1' onClick={handleClick}>
          <View className='slogan'>{newMenu.mop.label}</View>
          <Image
            className='img'
            mode='widthFix'
            src={newMenu.mop.image}
          ></Image>
        </View>
        <View className='right' data-index='2' onClick={handleClick}>
          <View className='slogan'>{newMenu.mod.label}</View>
          <Image
            className='img'
            mode='widthFix'
            src={newMenu.mod.image}
          ></Image>
        </View>
      </NCard>
    );
  };

  return (
    <View>
      <Carousel imgs={banners} />
      <Main>
        <Login />
        <PurchaseCard newMenu={newMenus} />
        <NavCard navs={navs} onClick={onNavigate} />
        <Ads imgs={ads} />
      </Main>
    </View>
  );
}

export default Index;
