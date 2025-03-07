import { StyleSheet, Text, View, StatusBar, Image, TextInput } from 'react-native'
import React from 'react'
import {Colors} from '../constans'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Buttons from '../components/Buttons'

const Login = () => {
  return (
    <View style={{flex:1, backgroundColor:'#ffffff', flexDirection:'column'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff"/>
      {/*Login form section*/}
      <View style={{flex:2, flexDirection:'column', backgroundColor:'#ffffff', paddingTop:10, paddingHorizontal:'3%'}}>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
          <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:30, color:Colors.black}}>Welcom to Login Page</Text>
        </View>
        <Image source={require('../assets/images/text-logo.png')} style={{width:120, height:80, alignSelf:'center', marginTop:10}}/>

        <View style={{flexDirection:'column', paddingTop:20}}>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor:'#ededed',
          width:'95%', borderRadius:10, height:60, paddingLeft:20}}>
            <Ionicons name="mail" size={22} color="#818181"/>
            <TextInput style={styles.input} placeholder="Enter Email" placeholderTextColor="#818181"/>
          </View>

          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor:'#ededed',
          width:'95%', borderRadius:10, height:60, paddingLeft:20, marginTop:20}}>
            <Ionicons name="lock-closed" size={22} color="#818181"/>
            <TextInput style={styles.input} placeholder="Enter Password" placeholderTextColor="#818181"/>
          </View>
          
          <View style={{width:'90%', marginBottom:10}}>
            <Text style={{fontSize:17, fontFamily:'OpenSans-SemiBold', color:'#818181', alignSelf:'flex-end',
            paddingTop:10}}> Forgot Password?</Text>
          </View>

          <Buttons btn_text={"Sign In"} on_press={()=>console.log('test')}/>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  input:{
    position:'relative',
    height:'100%',
    width:'90%',
    fontFamily:'OpenSans-Medium',
    paddingLeft:20,
  }
})