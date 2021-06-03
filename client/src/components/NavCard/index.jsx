import { View, Text, Image } from "@tarojs/components";
import { NCard } from "@/components";
import classNames from 'classnames'
import "./index.scss";

function NavCard(props) {
  const { className="" ,title, navs=[] } = props
  return (
    <NCard className={classNames(className,'mb-1 nav-card')}>
      {title && <View>{props.title}</View>}
      <View className='nav-card--body'>
        {navs.length>0 && navs.map((item, idx) => {
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
export default NavCard
