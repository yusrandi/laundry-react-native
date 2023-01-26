import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomePage, OrderPage, SettingPage, SplashPage } from '../pages'
import { BottomNavigator } from '../components'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>

      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Tab.Screen name="Order" component={OrderPage} options={{ headerShown: false }} />
      <Tab.Screen name="Setting" component={SettingPage} options={{ headerShown: false }} />

    </Tab.Navigator>
  )
}
const Router = () => {
  return (
    <Stack.Navigator initialRouteName='MainApp'>
      <Stack.Screen name="Splash" component={SplashPage} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router
