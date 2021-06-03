import { Component } from 'react'
import Taro from '@tarojs/taro'
import './app.scss'

class App extends Component {

  componentDidMount () {
    if(process.env.TARO_ENV === "weapp") {
      Taro.cloud.init({ env: "note-9gpvzagz1944b75f", traceUser: true })
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
