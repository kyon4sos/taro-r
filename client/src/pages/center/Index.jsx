import { View, Text,Image} from "@tarojs/components";
import { AtAvatar, AtProgress} from "taro-ui";
import { useState, useEffect } from "react";
import { NCard,NavCard } from "@/components";
import "./index.scss";

function Center() {
  const [userInfo, setUserInfo] = useState({});
const navs =[{
  image:'https://6e6f-note-9gpvzagz1944b75f-1258879474.tcb.qcloud.la/starbuck/icon_jiangpin.png?sign=ea93be5e756e2ad1e8faaf3a50d9ecd2&t=1622702538',
  label:'我的奖品'
},{
  label:"我的礼物",
  image:'https://6e6f-note-9gpvzagz1944b75f-1258879474.tcb.qcloud.la/starbuck/icon_presents.png?sign=9043bfbb1f7d4af3e76c2b0dbd5a1159&t=1622702812'
}]
  useEffect(() => {
    console.log("center");
  });

  return (
    <View>
      <View className='user-info--wrap'>
        <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
        <View className='user-info'>
          <Text>{userInfo.nickName || "游客"}</Text>
          <Text>
            {userInfo.nickName || "青铜"} {userInfo.phone || "手机号"}
          </Text>
        </View>
      </View>
      <View className='main'>
        <NCard className='member-card mb-1'>
          <View>
            <View className='start-wrap'>
              <Text>2</Text>
              <View className='at-icon at-icon-star-2'></View>
            </View>
            <View className='btn bnt-plain'>会员权益</View>
          </View>
          <AtProgress></AtProgress>
        </NCard>
        <View className='coupon-wrap mb-1'>
          <NCard>
            <View className='info-wrap'>
              <View className='info'>
                <Text>8</Text>
                <Text>张</Text>
              </View>
              <View className='btn btn-primary'>购买</View>
            </View>
            <View className='nav'>
              <Text>我的好礼券</Text>
              <View className='at-icon at-icon-chevron-right'></View>
            </View>
          </NCard>
          <NCard>
            <View className='info-wrap'>
              <View className='info'>
                <Text>0</Text>
                <Text>张</Text>
              </View>
            </View>
            <View className='nav'>
              <Text>我的星礼卡</Text>
              <View className='at-icon at-icon-chevron-right'></View>
            </View>
          </NCard>
        </View>
        <NavCard title='我的星巴克' navs={navs}></NavCard>
      </View>
    </View>
  );
}

export default Center;
