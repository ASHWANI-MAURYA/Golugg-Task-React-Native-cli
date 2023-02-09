import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Components/Colors'
import Input from '../Components/Input';
import Button from '../Components/Button'
const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.Page}>
        <View>
          <Text style={{ fontWeight: '500', fontSize: 22 }}>Oh, Forgot Your Password?</Text>
        </View>
        <View style={styles.Textbox}>
          <Text style={{ fontSize: 13, fontWeight: '500', lineHeight: 23,color:Colors.colors.TextColor }}>Please enter your Mobile Number and we'll send you a OTP to reset your Password</Text>
        </View>
        <View style={styles.inputTopBox}>
          <View style={styles.imagebox}>
            <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/New1.png')} />
          </View>
          <View style={{ width: '88%' }}>
            <Input Placeholder={'Phone Number'} />
          </View>
        </View>
        <View style={{ top:10 }}>
          <Button onPress={() => { navigation.navigate("ForgotPasswordOtp") }} title={'Continue'} />
        </View>
        <View style={styles.BacktoLOGIN}>
          <Text style={styles.buttonsubText}>Remember the Password?</Text>
          <TouchableOpacity style={styles.resendbutton} onPress={() => { navigation.navigate("Login") }}>
            <Text style={{ color: Colors.colors.Red, fontWeight: '500', }}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default ForgotPassword
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 30
  },
  Page: {
    // padding: 10
  }, inputTopBox: {
    flexDirection: 'row', marginTop: 20, justifyContent: 'space-between',borderWidth:0
  }, imagebox: {
    width: '10%', top: 20
  },
  Textbox: {
    top: 10
  },
  buttonsubText: {
    textAlign: 'center', fontWeight: '500', fontSize: 15, padding: 2
  },
  BacktoLOGIN: {
    borderRadius: 5, borderWidth: 1, borderColor: Colors.colors.inputBorderColor, marginTop:70, padding: 20,flexDirection:'row',justifyContent:'center'
  }, resendbutton: {
    flexDirection: 'row', justifyContent: 'center', padding: 2
  }
})