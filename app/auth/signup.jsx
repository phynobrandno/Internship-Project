import { View, Text,StyleSheet,TextInput,Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../constant/colors'
import { useRouter } from "expo-router";
import { useState } from 'react';


export default function signin() {
        const router = useRouter();
 
  return (
    <View style={Styles.container}>
    <Text style={{
      fontFamily:'Times New Roman',
      fontSize: 30,
      fontWeight: 'semibold',
      marginTop: 61,
      marginLeft: 16,
      marginRight: 16,
      textAlign: 'center',
      color:colors.lightGray,
    }}>Hello! Register to get started.</Text>

<View style={{marginTop: 42}}>
    <TextInput style={Styles.TextInput}placeholder='Username'  />
    <TextInput style={Styles.TextInput} placeholder='Email'  />
    <TextInput style={Styles.TextInput}placeholder='Password' />
    <TextInput style={Styles.TextInput} placeholder='Confirm password'  />
<TouchableOpacity>
      <Text style={{
          color:colors.forgotpassword,
          marginLeft: 16,
          marginTop: 24,
          width:211,
          height: 22,
          fontSize:14,
          fontWeight:'semibold',
          opacity:1000,
          fontFamily:'Times New Roman'
          }}> Forgot Password?</Text>
          </TouchableOpacity>
          
<TouchableOpacity 
style={{marginTop: 32, backgroundColor:colors.lightGray, borderRadius: 24, marginLeft: 16, marginRight: 16, height: 50, justifyContent: 'center', alignItems: 'center'}}>
<Text 
style={{
          color:colors.forgotpassword,
          marginLeft: 16,
          marginTop: 24,
          width:343,
          height: 50,
          fontSize:14,
          fontWeight:'medium',
          
          fontFamily:'Times New Roman',
          textAlign:'center'
          }}>Register </Text>



</TouchableOpacity>
<Text style={{
          color:colors.forgotpassword,
          marginLeft: 16,
          marginTop: 32,
          width:343,
          height: 22,
          fontSize:14,
          fontWeight:'semibold',
          opacity:1000,
          fontFamily:'Times New Roman',
          alignItems:'center',
          justifyContent:'center',
          textAlign:'center'
          }}>------Or Register with------</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', margin    : 16,marginTop:24, justifyContent: 'center'}}>   
          <Text style={{borderRadius:5,width:50,height:50,}}><Image style={{ width:30,height:40,  marginTop: 32}} source={require('./../../assets/images/face.png')} /></Text>
          <Text style={{borderRadius:5,width:50,height:50}}><Image style={{  width:30,height:30,marginLeft:8, marginTop: 32,backgroundColor:colors.white,borderRadius:25}} source={require('./../../assets/images/cib_apple.png')} /></Text>
          <Text style={{borderRadius:5,width:50,height:50}}> <Image style={{  width:30,height:30,  marginLeft:8, marginTop: 32}} source={require('./../../assets/images/google.png')} /></Text>
          </View>

< TouchableOpacity onPress={() =>router.push('/auth/login/')}>
<Text style={{
          color:colors.forgotpassword,
          marginLeft: 16,
          marginTop: 23,
          width:343,
          height: 22,
          fontSize:14,
          fontWeight:'semibold',
          opacity:1000,
          fontFamily:'Times New Roman',
          alignItems:'center',
          justifyContent:'center',
          textAlign:'center'
}}>Already have an account? Login Now</Text>
</TouchableOpacity>

    </View>
  </View>
  )
}
const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  TextInput: {
    backgroundColor: colors.textInput,
    borderRadius: 5,
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    width: 343,
    height: 50,
    borderRadius: 24,
  }
})