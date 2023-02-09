import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Components/Colors'
import Otp from '../Components/OTP'
import Button from '../Components/Button'
import axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Loginotp = ({ navigation }) => {
  const [myotp, setMYOTP] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();
  function UserLogin() {
    setIsLoading(true)
    try {
      axios.post('https://phpwebdevelopmentservices.com/development/test/api/login', {
        // jsonrpc: "2.0",
        params: {
          mobile: route.params.PhoneNumber,
          password: route.params.PassWord,
          mobile_otp: myotp,
          firebase_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
        }
      })
        .then(res => {
          let userInfo = res.data;
          console.log(route.params.PhoneNumber)
          console.log(route.params.PassWord)
          console.log(myotp)
          if (userInfo = res.data.result) {
            // console.log('ha')
            console.log('OTP Verifaction done')
            // Alert.alert('Golugg says', userInfo.message, [
            //   { text: 'OK', onPress: () => nextPage() },
            // ])
            AsyncStorage.setItem('mobile', route.params.PhoneNumber);
            AsyncStorage.setItem('password',route.params.PassWord);
            AsyncStorage.setItem('myotp',myotp);
            AsyncStorage.setItem('firebase_token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9");
            nextPage()
            setIsLoading(false)
          }
          if (userInfo = res.data.error) {
            // console.log('OTP Verifaction done')
            if (userInfo.message == 'Deleted') {
              console.log('wrong OTP')
              Alert.alert('Golugg says', 'No OTP entered. Please enter a valid OTP.')
              setIsLoading(false)
              return;
            }
            if (userInfo.message == 'Wrong Input') {
              console.log('OTP Verifaction Alredy done')
              //   Alert.alert('Golugg says','OTP Verification Done',[
              //     { text: 'OK', onPress: () => nextPage() },
              // ])
              nextPage()
              setIsLoading(false)
              return;
            }
            Alert.alert('Golugg says', userInfo.message)
            setIsLoading(false)
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
    catch (error) {
      console.log(error.message);
    }
  }
  function nextPage() {
    navigation.navigate('Drawer');
    // Alert.alert('Dashboard')
  }
  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} textContent={'Please Wait ..'}
        textStyle={{ color: Colors.colors.White, fontWeight: '500' }} />
      <View style={styles.Page}>
        <View>
          <Text style={{ fontWeight: '500', fontSize: 22 }}>OTP Verification</Text>
        </View>
        <View style={styles.Textbox}>
          <Text style={{ fontSize: 13, fontWeight: '500', lineHeight: 23, color: Colors.colors.TextColor }}>Please enter the 6 digit code send to your at +91 {route.params.PhoneNumber}</Text>
        </View>
        <View style={styles.Otpbox}>
          <Otp setFinalOTP={setMYOTP} />
        </View>
        <View style={{ marginTop: 40 }}>
          <Button onPress={UserLogin} title={'Sign up'} />
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

export default Loginotp
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
    borderRadius: 5, borderWidth: 1, borderColor: Colors.colors.inputBorderColor, top: 70, padding: 10
  }, resendbutton: {
    flexDirection: 'row', justifyContent: 'center', padding: 2
  }
})