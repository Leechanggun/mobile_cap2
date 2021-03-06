import { createStackNavigator,createSwitchNavigator } from 'react-navigation'

import LoginScreen from './loginScreen'
import AuthLoadingScreen from './authLoadingScreen'
import RecycleScreen from './recycleScreen'

import TabScreen from './tabScreen'

const AuthStack = createStackNavigator({ 
  SignIn: LoginScreen 
});

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabScreen,
    Auth: AuthStack,
    RecycleScreen : RecycleScreen,
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default RootStack
