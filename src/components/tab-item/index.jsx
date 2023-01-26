/* eslint-disable react/prop-types */
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AccountActiveIcon, AccountIcon, HomeActiveIcon, HomeIcon, OrderActiveIcon, OrderIcon } from '../../assets'
import { DISABLE_COLOR, PRIMARY_COLOR } from '../../utils/constant'

const TabItem = ({ onPress, onLongPress, isFocused, label }) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <HomeActiveIcon/> : <HomeIcon/>
    if (label === 'Order') return isFocused ? <OrderActiveIcon/> : <OrderIcon/>
    if (label === 'Setting') return isFocused ? <AccountActiveIcon/> : <AccountIcon/>

    return <HomeIcon/>
  }
  return (
    <TouchableOpacity

            onPress={onPress}
            onLongPress={onLongPress}
            style={style.container}>
            <Icon />
            <Text style={style.text(isFocused)}>{label}</Text>
          </TouchableOpacity>
  )
}

export default TabItem
const style = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  text: (isFocused) => ({
    fontSize: 10,
    color: isFocused ? PRIMARY_COLOR : DISABLE_COLOR,
    marginTop: 8

  })
})
