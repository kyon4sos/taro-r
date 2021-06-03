import { View, Text, Image } from "@tarojs/components";
import { NCard } from "@/components";
import "./index.scss";

function NavCard(props) {
  return (
    <NCard className='nav-card mb-1'>
      {props.title && <View>{props.title}</View>}
      <View className='nav-card--body'>
        {props.navs.map((item, idx) => {
          return (
            <View className='nav-item' key={idx}>
              <Image className='nav-icon' src={item.image}></Image>
              <Text className='nav-label'>{item.label}</Text>
            </View>
          );
        })}
      </View>
    </NCard>
  );
}
export default NavCard;
{
  /* <View className='nav-item'>
<Image
  className='nav-icon'
  src='https://6e6f-note-9gpvzagz1944b75f-1258879474.tcb.qcloud.la/starbuck/icon_jiangpin.png?sign=ea93be5e756e2ad1e8faaf3a50d9ecd2&t=1622702538'
></Image>
<Text className='nav-label'>我的奖品</Text>
</View>
<View className='nav-item'>
<Image
  className='nav-icon'
  src='https://6e6f-note-9gpvzagz1944b75f-1258879474.tcb.qcloud.la/starbuck/icon_presents.png?sign=9043bfbb1f7d4af3e76c2b0dbd5a1159&t=1622702812'
></Image>
<Text className='nav-label'>我的礼物</Text>
</View> */
}
// const navs =[{
//   iamge:'https://6e6f-note-9gpvzagz1944b75f-1258879474.tcb.qcloud.la/starbuck/icon_jiangpin.png?sign=ea93be5e756e2ad1e8faaf3a50d9ecd2&t=1622702538',
//   label:'我的奖品'
// },{
//   label:"我的礼物",
//   image:'https://6e6f-note-9gpvzagz1944b75f-1258879474.tcb.qcloud.la/starbuck/icon_presents.png?sign=9043bfbb1f7d4af3e76c2b0dbd5a1159&t=1622702812'
// }]
