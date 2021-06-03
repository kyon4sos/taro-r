import { Image, Swiper, SwiperItem } from "@tarojs/components";
import classNames from "classnames";
import "./index.scss";

function Carousel(props) {
  const { className = "", imgs = [] } = props;

  return (
    <Swiper
      className={classNames(className, "carousel")}
      indicatorColor='#999'
      indicatorActiveColor='#333'
      circular
      indicatorDots
      autoplay
    >
      {imgs.length > 0 &&
        imgs.map((item, idx) => {
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
export default Carousel;
