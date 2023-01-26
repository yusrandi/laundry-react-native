/* eslint-disable react/prop-types */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fonts, PesananAktifIcon } from '../../assets'
import { PRIMARY_COLOR, uPadding, windowHeight } from '../../utils/constant'

const PesananAktif = ({ title, subtitle }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <PesananAktifIcon />
      <View style={styles.label}>
        <Text style={styles.text_title}> {title} </Text>
        <Text style={styles.text_subtitle(subtitle)}> {subtitle} </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PesananAktif

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: uPadding * 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: windowHeight * 0.009,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2
  },
  label: {
    marginLeft: uPadding * 2,
    flexDirection: 'column'
  },
  text_title: {
    fontFamily: fonts.primary.bold,
    fontSize: 16
  },
  text_subtitle: (subtitle) => ({
    color: subtitle === 'Sudah Dicuci' ? PRIMARY_COLOR : 'red',
    fontFamily: fonts.primary.regular,
    fontSize: 12
  })
})
