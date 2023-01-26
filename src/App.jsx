/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import Router from './routers'

const App = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [navigation])

  return (

      <NavigationContainer styles={styles.statusbar}>
        <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle='dark-content'
      />
        <Router/>
      </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  statusbar: {

  }

})

export default App
