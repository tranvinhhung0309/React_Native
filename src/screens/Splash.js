import { StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {Colors} from '../../src/constans'

const Splash = ({navigation}) => {

  setTimeout(() => {
    navigation.replace('Onboarding')

  }, 3000);
  return (
    <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:Colors.white }}>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#ffffff"/>
      <Image source={require('../assets/images/text-logo.png')} style={{width:120, height:80}}/>
      <Text style={{fontFamily:'OpenSans-Bold', fontSize:40, color:Colors.primary}}>This is Splash Screen</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})