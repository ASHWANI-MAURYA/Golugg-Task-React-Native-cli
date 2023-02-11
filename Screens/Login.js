import { View, Text, StyleSheet, TextInput, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from '../Components/Button'
import { Colors } from '../Components/Colors'
import Input from '../Components/Input';
import axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({ navigation }) => {
  let usermobile = AsyncStorage.getItem('mobile');
  let userpassword = AsyncStorage.getItem('password');
  let tokenId = AsyncStorage.getItem('firebase_token');

  AsyncStorage.getItem('mobile').then((value) => {
    if (value !== null) {
      navigation.replace('Drawer')
    }
  });
  // const [message, setmessage] = useState('')
  const [PhoneNumber, setPhonenumber] = useState('')
  const [PassWord, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const goToMessageScreen = () => {
    navigation.navigate('Loginotp', {
      PhoneNumber,
      // message,
      PassWord
    });
  };
  function Phonenumber(value) {
    setPhonenumber(value)
    // setmessage(value)
  }
  const Password = (value) => {
    setPassword(value)
  }
  function UserLogin() {
    setIsLoading(true)
    console.log(usermobile)
    console.log(userpassword)
    console.log(tokenId)
    try {
      axios.post('https://phpwebdevelopmentservices.com/development/test/api/login', {
        jsonrpc: "2.0",
        params: {
          mobile: PhoneNumber,
          password: PassWord,
          // mobile_otp: "491356",
          firebase_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
        }
      })
        .then(res => {
          let userInfo = res.data;
          console.log(PhoneNumber)
          console.log(PassWord)
          if (userInfo = res.data.result) {
            console.log('ha')
            // Alert.alert('Golugg says', userInfo.message)
            AsyncStorage.setItem('mobile', PhoneNumber);
            AsyncStorage.setItem('password', PassWord);
            AsyncStorage.setItem('firebase_token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9");
            setIsLoading(false)
            // nextPage()
          }
          if (userInfo = res.data.error) {
            console.log(userInfo.message)
            // Alert.alert('Golugg says', userInfo.message)
            setIsLoading(false)
            if (userInfo.message == 'otp required') {
              console.log('otp chahiya')
              // navigation.replace('Loginotp');
              goToMessageScreen()
            }
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
        <View style={styles.WelcomeBox}>
          <Text style={styles.WelcomeText}>Welcome Back!</Text>
        </View>
        <View style={styles.inputTopBox}>
          <View style={styles.imagebox}>
            <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/New.png')} />
          </View>
          <View style={{ width: '88%' }}>
            <Input InputValue={Phonenumber} Placeholder={'Phone Number'} />
          </View>
        </View>
        <View style={styles.inputTopBox}>
          <View style={styles.imagebox}>
            <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/New1.png')} />
          </View>
          <View style={{ width: '88%' }}>
            <Input PasswordType={true} InputValue={Password} Placeholder={'Password'} />
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate("ForgotPasswordScreen") }}>
            <Text style={styles.forgot}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Button onPress={UserLogin} title={'Login'} />
        </View>
        <View style={styles.signupbox}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View>
              <Text style={{ fontWeight: '500' }} >Don't have an account on Golugg?</Text>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }}>
              <Text style={{ color: Colors.colors.Red }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 30
  },
  Page: {
    padding: 10
  }, WelcomeBox: {
    marginVertical: 20
  },
  WelcomeText: {
    fontWeight: '500',
    fontSize: 22
  }, inputTopBox: {
    flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between'
  }, imagebox: {
    width: '10%', top: 20
  }, forgot: {
    color: Colors.colors.Red, textAlign: 'right'
  },
  signupbox: {
    marginTop: 50, borderWidth: 1, padding: 15, borderRadius: 5, borderColor: Colors.colors.inputBorderColor
  }
})