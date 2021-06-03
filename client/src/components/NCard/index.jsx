import { View } from "@tarojs/components";
import classNames from 'classnames'
import "./index.scss";

function NCard(props) {
  const { className = "",children,onClick } = props;

  return (
    <View className={classNames(className, 'n-card')} onClick={onClick}>
      {children}
    </View>
  );
}
export default NCard

