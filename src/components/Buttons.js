import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
<<<<<<< HEAD
import {Colors} from '../constants'
=======
import {Colors} from '../constans'
>>>>>>> fa0f06121e01f92ac7f3f0adc9594351ab001f13

const Buttons = ({on_press, btn_text}) => {
  return (
    <TouchableOpacity style={{justifyContent:'center', width:'90%', backgroundColor:Colors.primary, height:50, 
    marginBottom:30, borderRadius:10}} onPress={on_press}>
        <Text style={{fontSize:15, letterSpacing:1.5, textAlign:'center', position:'relative', 
        fontFamily:'OpenSans-SemiBold', color:Colors.white}}>{btn_text}</Text>
    </TouchableOpacity>
  )
}

export default Buttons

const styles = StyleSheet.create({})