import { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro from '@tarojs/taro'
// 按需引入
import { getConfig,checkFirstLogin } from "@/request";
import { NCard, NavCard, Carousel, Main } from "@/components";

import "./index.scss";

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
  const check = ()=>{
    
  }
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

  const onLogin =async () =>{
    let res =await checkFirstLogin();
    console.log(res.code);
    if(res.code ===20001) {
      
      return
    }
    if(res.code ===20000) {
      Taro.navigateTo({
        url: '/pages/login/index?mobile=12345678901',
        // events: {
        //   // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        //   acceptDataFromOpenedPage: function(data) {
        //     console.log(data)
        //   },
        //   someEvent: function(data) {
        //     console.log(data)
        //   }
        // },
        // success: function (ret) {
        //   console.log(ret);
        //   // 通过eventChannel向被打开页面传送数据
        //   ret.eventChannel.emit('acceptDataFromOpenerPage', { moble: '12345678901' })
        // }
      })
    }
  }
  const PurchaseCard = props => {
    const {
      newMenu = { mop: { label: "", image: "" }, mod: { label: "", image: "" } }
    } = props;
    return (
      <NCard className='mb-1 purchase-card'>
        <View className='left'>
          <Text className='slogan'>{newMenu.mop.label}</Text>
          <Image
            className='img'
            mode='widthFix'
            src={newMenu.mop.image}
          ></Image>
        </View>
        <View className='right'>
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
        <NavCard navs={navs} />
        <Ads imgs={ads} />
      </Main>
    </View>
  );
}

export default Index;
