import { View } from "@tarojs/components";
import classNames from 'classnames'
import "./index.scss";

function NCard(props) {
  const { className = "",children } = props;

  return (
    <View className={classNames(className, 'n-card')}>
      {children}
    </View>
  );
}
export default NCard

