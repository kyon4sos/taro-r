import { Component } from "react";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";

import "./index.scss";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { imgs } = this.props;
    return (
      <Swiper className={`${this.props.className|| ''} 'carousel'`}
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
      >
        {imgs.map((item, idx) => {
          return (
            <SwiperItem key={idx}>
              {/* <View className='title'>{item.title}</View> */}
              <Image className='image' mode='widthFix' src={item.image}></Image>
            </SwiperItem>
          );
        })}
      </Swiper>
    );
  }
}
