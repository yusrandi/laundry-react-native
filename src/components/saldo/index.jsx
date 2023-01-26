import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PRIMARY_COLOR, windowHeight } from '../../utils/constant'
import { fonts } from '../../assets'
import ButtonIcon from '../button-icon'
import Gap from '../gap'

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_saldo}>
        <View style={styles.container_text}>
          <Text style={styles.label_saldo}>Saldo</Text>
          <Text style={styles.value_saldo}>Rp. 100.000</Text>
        </View>
        <View style={styles.container_text}>
          <Text style={styles.label_point}>Antar Point</Text>
          <Text style={styles.value_point}>100 points</Text>
        </View>
      </View>
      <Gap width={5}/>
      <View style={styles.container_button_icon}>
        <ButtonIcon title="Add Saldo"/>
        <Gap width={5}/>
        <ButtonIcon title="Get Point"/>
      </View>
    </View>
  )
}

export default Saldo

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 30,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: -windowHeight * 0.07,
    flexDirection: 'row'
  },
  container_saldo: {
    width: '60%'
  },
  container_text: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label_saldo: {
    fontSize: 16,
    fontFamily: fonts.primary.regular
  },
  value_saldo: {
    fontSize: 16,
    fontFamily: fonts.primary.bold
  },
  label_point: {
    fontSize: 12,
    fontFamily: fonts.primary.regular
  },
  value_point: {
    fontSize: 12,
    color: PRIMARY_COLOR,
    fontFamily: fonts.primary.regular
  },

  container_button_icon: {
    flex: 1,
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-end'

  }
})
