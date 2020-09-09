import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createStackNavigator} from 'react-navigation'
import Splash from './src/Splash'
import Login from './src/Login'
import Signup from './src/SignUp'
import Home from './src/Home'
import Front from './src/Front'

export class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}
const AppNavigator = createStackNavigator({
  Splash:Splash,
  Front:Front,
  Login:Login,
  Signup:Signup,
  Home:Home
},{
  navigationOptions:{
    header:null
  }
})

export default App
