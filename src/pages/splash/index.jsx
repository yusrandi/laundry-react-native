/* eslint-disable react/prop-types */
import React from 'react'
import { ImageBackground, StyleSheet, Image } from 'react-native'
import { Logo, SplashBackground } from '../../assets'

const SplashPage = () => {
  return (
    <ImageBackground source={SplashBackground} style={style.background}>
      <Image source={Logo} style={style.logo}/>
    </ImageBackground>
  )
}

export default SplashPage

const style = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  logo: {
    resizeMode: 'center'
  }

})
