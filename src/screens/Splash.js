import { StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
<<<<<<< HEAD
import {Colors} from '../constants'
=======
import {Colors} from '../../src/constans'
>>>>>>> fa0f06121e01f92ac7f3f0adc9594351ab001f13

const Splash = ({navigation}) => {

  setTimeout(() => {
    navigation.replace('Onboarding')

  }, 3000);
  return (
    <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:Colors.white }}>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#ffffff"/>
<<<<<<< HEAD
      <Image source={require('../assets/images/icon_gara.png')} style={{width:100, height:100}}/>
      <Text style={{fontFamily:'OpenSans-Bold', fontSize:40, color:Colors.primary}}>HQA</Text>
=======
      <Image source={require('../assets/images/text-logo.png')} style={{width:120, height:80}}/>
      <Text style={{fontFamily:'OpenSans-Bold', fontSize:40, color:Colors.primary}}>This is Splash Screen</Text>
>>>>>>> fa0f06121e01f92ac7f3f0adc9594351ab001f13
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})