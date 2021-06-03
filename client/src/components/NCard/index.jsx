import { View } from "@tarojs/components";
import { Component } from "react";
import "./index.scss";

export default class NCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View className={`${this.props.className||''} 'n-card'`}>
      {this.props.children}
    </View>;
  }
}
