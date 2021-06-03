import { Component ,useState, useEffect } from "react";
import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import { AtButton } from "taro-ui";
import update, { extend } from "immutability-helper";
import { getConfig } from "../../request";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import Carousel from "../../components/Carousel";
import NCard from "../../components/NCard";
import "./index.scss";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ad: [],
      banner: [],
      newMenu:{}
    };
  }
  async componentWillMount() {}

  async componentWillMount() {
    console.log("will mount");
    let res = await getConfig();
    console.log(res.data);
    const { banner, ad, newMenu } = res.data.data;
    console.log(newMenu);
    // this.setState((state,props)=>{
    //     return{
    //         newMenu:{
    //           mop:{
    //             label:newMenu.mop.label
    //           }
    //         }
    //     }
    // })
    update(this.state, {
     newMenu:{
       $merge:{a:1}
     }
    });
   this.setState((state,props)=>{
       return{
           count:state.count+1
       }
   },()=>{
    console.log(this.state.newMenu);
   })
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { banner, ad, newMenu } = this.state;
    return (
      <View>
        <Carousel imgs={banner} />
        <NCard className='login_card'>
          <Text>即刻入会，尊享好礼</Text>
          <Text>登录 / 注册</Text>
        </NCard>
        <NCard className='purchase_card'>
          <View className='left'>
            <Text className='title'>咖快</Text>
            <Text className='slogan'>在线点，到店取</Text>
            <Image className='img'></Image>
          </View>
          <View className='right'>
            <Text className='title'>专星送</Text>
            {/* <View className='slogan'>{newMenu.mop.label}</View> */}
            <Image className='img'></Image>
          </View>
        </NCard>
        <AtButton className='btn' type='primary'>
          使用
        </AtButton>
        <View className='slogan'>{newMenu.a}</View>
      </View>
    );
  }
}
