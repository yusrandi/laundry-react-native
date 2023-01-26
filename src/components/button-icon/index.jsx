/* eslint-disable react/prop-types */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
  EkspressIcon,
  fonts,
  GetPointIcon,
  GetSaldoIcon,
  KarpetIcon,
  KiloanIcon,
  SatuanIcon,
  SetrikaIcon,
  VipIcon
} from '../../assets'
import { SECONDARY_COLOR, uPadding } from '../../utils/constant'

const ButtonIcon = ({ title, type }) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <GetSaldoIcon />
    if (title === 'Get Point') return <GetPointIcon />
    if (title === 'Kiloan') return <KiloanIcon />
    if (title === 'Satuan') return <SatuanIcon />
    if (title === 'Vip') return <VipIcon />
    if (title === 'Karpet') return <KarpetIcon />
    if (title === 'Setrika') return <SetrikaIcon />
    if (title === 'Ekspress') return <EkspressIcon />

    return <GetSaldoIcon />
  }
  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.icon(type)}>
        <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
  container: type => ({
    marginBottom: type === 'layanan' ? uPadding : 0
  }),
  icon: type => ({
    borderRadius: 10,
    alignItems: 'center',
    padding: type === 'layanan' ? 20 : 5,
    backgroundColor: SECONDARY_COLOR
  }),
  text: type => ({
    marginTop: 8,
    fontSize: type === 'layanan' ? 14 : 10,
    textAlign: 'center',
    fontFamily: fonts.primary.regular

  })
})
