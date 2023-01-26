import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderPage = () => {
  return (
    <View style={styles.container}>
      <Text>Order</Text>
    </View>
  )
}

export default OrderPage
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: StatusBar.currentHeight
  }
})
