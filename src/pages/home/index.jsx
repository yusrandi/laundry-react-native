import React from 'react'
import { GREY_COLOR, uPadding, windowHeight, windowWidth } from '../../utils/constant'
import { StyleSheet, View, Image, Platform, Text, ScrollView } from 'react-native'
import { DeliveryImage, fonts, Logo } from '../../assets'
import { ButtonIcon, Saldo } from '../../components'
import PesananAktif from '../../components/pesanan'

const HomePage = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.container_welcome}>
            <Text style={styles.Text}>Selamat Datang</Text>
            <Text style={[styles.Text, styles.Text_name]}>Userundie</Text>
          </View>
          <Image
            source={DeliveryImage}
            style={{ position: 'absolute', right: 0, bottom: 0 }}
          />
        </View>
        <Saldo />
        <View style={styles.container_layanan}>
          <Text style={styles.label_layanan}>Layanan Kami</Text>
          <View style={styles.icon_layanan}>
            <ButtonIcon title={'Kiloan'} type={'layanan'} />
            <ButtonIcon title={'Satuan'} type={'layanan'} />
            <ButtonIcon title={'Vip'} type={'layanan'} />
            <ButtonIcon title={'Karpet'} type={'layanan'} />
            <ButtonIcon title={'Setrika'} type={'layanan'} />
            <ButtonIcon title={'Ekspress'} type={'layanan'} />
          </View>
        </View>
        <View style={styles.container_pesanan}>
          <Text style={styles.label_layanan}>Pesanan Aktif</Text>
          <PesananAktif title={'Pesanan 0001'} subtitle={'Sudah Dicuci'} />
          <PesananAktif title={'Pesanan 0002'} subtitle={'Masih Dicuci'} />
          <PesananAktif title={'Pesanan 0003'} subtitle={'Masih Dicuci'} />
          <PesananAktif title={'Pesanan 0004'} subtitle={'Masih Dicuci'} />
          <PesananAktif title={'Pesanan 0005'} subtitle={'Masih Dicuci'} />
          <PesananAktif title={'Pesanan 0006'} subtitle={'Masih Dicuci'} />
          <PesananAktif title={'Pesanan 0007'} subtitle={'Masih Dicuci'} />
          <PesananAktif title={'Pesanan 0008'} subtitle={'Masih Dicuci'} />
          <PesananAktif title={'Pesanan 0009'} subtitle={'Masih Dicuci'} />
          <PesananAktif title={'Pesanan 00010'} subtitle={'Masih Dicuci'} />
          <PesananAktif title={'Pesanan 00011'} subtitle={'Masih Dicuci'} />
          <PesananAktif title={'Pesanan 00012'} subtitle={'Masih Dicuci'} />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    backgroundColor: GREY_COLOR,
    flex: 1
  },
  header: { backgroundColor: '#E0F7EF', paddingTop: Platform.OS === 'ios' ? 30 : 20, paddingLeft: uPadding * 2, width: windowWidth, height: windowHeight * 0.3, borderBottomLeftRadius: 95, borderBottomRightRadius: 95 },
  logo: { resizeMode: 'center', width: windowWidth * 0.25, height: windowHeight * 0.06 },
  container_welcome: { paddingTop: uPadding, marginTop: windowHeight * 0.025 },
  Text: { fontFamily: fonts.primary.regular, fontSize: 20 },
  Text_name: { fontFamily: fonts.primary.bold },
  text_welcome: {},
  container_layanan: { marginHorizontal: 30, marginTop: uPadding * 2 },
  label_layanan: { fontSize: 16, fontFamily: fonts.primary.bold, marginBottom: uPadding },
  icon_layanan: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' },
  container_pesanan: { marginHorizontal: 30, marginTop: uPadding * 2 }
})
