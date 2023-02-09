import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Components/Colors'
import Otp from '../Components/OTP'
import Button from '../Components/Button'
const ForgotPassword = () => {
  const [myotp, setMYOTP] = useState("")
  return (
    <View style={styles.container}>
      <View style={styles.Page}>
        <View>
          <Text style={{ fontWeight: '500', fontSize: 22 }}>OTP Verification</Text>
        </View>
        <View style={styles.Textbox}>
          <Text style={{ fontSize: 13, fontWeight: '500', lineHeight: 23,color:Colors.colors.TextColor  }}>Please enter the 6 digit code send to your at +91 9876543210</Text>
        </View>
        <View style={styles.Otpbox}>
          <Otp setFinalOTP={setMYOTP} />
        </View>
        <View style={{top:20}}>
          <Button title={'Submit'} />
        </View>
        <View style={styles.resend}>
          <Text style={styles.buttonsubText}>Did not received verification code yet </Text>
          <TouchableOpacity style={styles.resendbutton}>
            <Image style={{ width: 17, height: 16, top: 2, marginHorizontal: 5 }} source={require('../assets/icons/icon-48.png')} />
            <Text style={{ color: Colors.colors.Red, fontWeight: '500', }}>Resend Code</Text>
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
  },
  Textbox: {
    top: 10
  }, Otpbox: {
    top: 20
  },
  buttonsubText: {
    textAlign: 'center', fontWeight: '500', fontSize: 15, padding: 2
  },
  resend: {
    borderRadius: 5, borderWidth: 1, borderColor: Colors.colors.inputBorderColor, marginTop:70, padding: 10
  }, resendbutton: {
    flexDirection: 'row', justifyContent: 'center', padding: 2
  }
})