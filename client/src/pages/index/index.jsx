import { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import { getConfig } from "@/request";
import { NCard, NavCard, Carousel } from "@/components";
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
  return (
    <View>
      <Carousel imgs={banners} />
      <View className='main'>
        <NCard className='login-card mb-1'>
          <Text>即刻入会，尊享好礼</Text>
          <Text>登录 / 注册</Text>
        </NCard>
        <NCard className='purchase-card mb-1'>
          <View className='left'>
            <Text className='slogan'>{newMenus.mop.label}</Text>
            <Image
              className='img'
              mode='widthFix'
              src={newMenus.mop.image}
            ></Image>
          </View>
          <View className='right'>
            <View className='slogan'>{newMenus.mod.label}</View>
            <Image
              className='img'
              mode='widthFix'
              src={newMenus.mod.image}
            ></Image>
          </View>
        </NCard>
        <NavCard navs={navs}></NavCard>
        {/* <NCard className='nav-card'>
        {Object.values(newMenus)
          .filter(item => !item.label)
          .map((item, idx) => {
            if(!item.image) {
              item.image = newMenus.order.image
            }
            return (
              <View className='nav-item' key={idx}>
                <Image className='nav-icon' src={item.image}></Image>
                <Text className='desc'> {item.description}</Text>
              </View>
            );
          })}
      </NCard> */}
        <View className='ads-wrapper'>
          <Carousel className='ads' imgs={ads} />
        </View>
      </View>
    </View>
  );
}

export default Index;
