import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Components/Colors'
import Input from '../Components/Input';
import Button from '../Components/Button'
import axios from "axios";
import Spinner from 'react-native-loading-spinner-overlay';
const SignupForm = ({ navigation }) => {
    const Fname = (Value) => {
        setfirst_name(Value);
    };
    const Lname = (Value) => {
        setlast_name(Value);
        name1()
    };
    const name1 = () => {
        setname(first_name + '' + last_name)
    };
    const Email = (Value) => {
        setemail(Value);
    };
    const PhoneNumber = (Value) => {
        setphone(Value);
    };
    const Password = (Value) => {
        setpassword(Value);
    };
    const cPassword = (Value) => {
        setpassword_confirmation(Value);
    };
    const [first_name, setfirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const [password_confirmation, setpassword_confirmation] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    function submit() {
        setIsLoading(true)
        try {
            axios.post('https://phpwebdevelopmentservices.com/development/test/api/register', {
                jsonrpc: "2.0",
                params: {
                    name: name,
                    email: email,
                    phone: phone,
                    password: password,
                    password_confirmation: password_confirmation,
                    first_name: first_name,
                    last_name: last_name
                }
            })
                .then(res => {
                    let userInfo = res.data;
                    // console.log(userInfo)
                    if (userInfo = res.data.result) {
                        Alert.alert(userInfo.message_2, 'mobile OTP is ' + userInfo.mobile_otp, [
                           
                            { text: 'OK', onPress: () => nextPage() },
                        ])
                        setIsLoading(false)
                    }
                    if (userInfo = res.data.error) {
                        setIsLoading(false)
                        Alert.alert('Golugg says', userInfo.message)
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
  function nextPage(){
    navigation.navigate('Login');
  }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Spinner visible={isLoading} textContent={'Please Wait ..'}
                    textStyle={{ color: Colors.colors.White, fontWeight: '500' }} />
                <View style={styles.Page}>
                    <View>
                        <Text style={{ fontWeight: '500', fontSize: 22 }}>Welcome To Golugg</Text>
                    </View>
                    <View>
                        <View style={styles.inputTopBox}>
                            <View style={styles.imagebox}>
                                <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/icon-34.png')} />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Input InputValue={Fname} Placeholder={'First Name'} />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Input InputValue={Lname} Placeholder={'Last Name'} />
                            </View>
                        </View>
                        <View style={styles.inputTopBox}>
                            <View style={styles.imagebox}>
                                <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/Email.png')} />
                            </View>
                            <View style={{ width: '88%' }}>
                                <Input InputValue={Email} Placeholder={'Email (Optional)'} />
                            </View>
                        </View>
                        <View style={styles.inputTopBox}>
                            <View style={styles.imagebox}>
                                <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/New.png')} />
                            </View>
                            <View style={{ width: '88%' }}>
                                <Input InputValue={PhoneNumber} Placeholder={'Phone Number'} />
                            </View>
                        </View>
                        <View style={styles.inputTopBox}>
                            <View style={styles.imagebox}>
                                <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/New1.png')} />
                            </View>
                            <View style={{ width: '88%' }}>
                                <Input InputValue={Password} PasswordType={true} Placeholder={'Password'} />
                            </View>
                        </View>
                        <View style={styles.inputTopBox}>
                            <View style={styles.imagebox}>
                                <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/New1.png')} />
                            </View>
                            <View style={{ width: '88%' }}>
                                <Input InputValue={cPassword} PasswordType={true} Placeholder={'Confirm Password'} />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, fontWeight: '500', color: Colors.colors.TextColor }}>By clicking an option below,i agree to the</Text>
                            <Text style={{ color: Colors.colors.Red, fontSize: 13, fontWeight: '500' }}> terms of Use</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', top: 2 }}>
                            <Text style={{ fontSize: 13, fontWeight: '500', color: Colors.colors.TextColor }}>and have read the </Text>
                            <Text style={{ color: Colors.colors.Red, fontSize: 13, fontWeight: '500' }}>Privacy Policy</Text>
                        </View>
                    </View>
                    <View style={{ top: 10 }}>
                        <Button onPress={submit} title={'Continue'} />
                    </View>
                    <View style={styles.BacktoLOGIN}>
                        <Text style={styles.buttonsubText}>Already have an account on Golugg?</Text>
                        <TouchableOpacity style={styles.resendbutton} onPress={() => { navigation.navigate("Login") }} >
                            <Text style={{ color: Colors.colors.Red, fontWeight: '500', }}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default SignupForm
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 30,
        marginHorizontal: 30,
        // borderWidth:1
    },
    Page: {
        // padding: 10
    }, inputTopBox: {
        flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', borderWidth: 0
    }, imagebox: {
        width: '5%', top: 20
    },

    buttonsubText: {
        textAlign: 'center', fontWeight: '500', fontSize: 15, padding: 2
    },
    BacktoLOGIN: {
        borderRadius: 5, borderWidth: 1, borderColor: Colors.colors.inputBorderColor, marginTop: 70, padding: 20, flexDirection: 'row', justifyContent: 'center'
    }, resendbutton: {
        flexDirection: 'row', justifyContent: 'center', padding: 2
    }
})