import { View } from "@tarojs/components";
import classNames from 'classnames'

function Main(props) {
  const { className="", children } = props
  return(
    <View className={classNames(className,'main')}>
      {children}
    </View>
  )
}

export default Main;
