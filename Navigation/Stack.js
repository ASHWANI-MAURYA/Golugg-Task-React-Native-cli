import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login'
import OTP from '../Screens/Loginotp'
import ForgotPassword from '../Screens/ForgotPassword'
import ForgotPasswordEnterNumber from '../Screens/ForgotPasswordEnterNumber'
import ChangePassword from '../Screens/ChangePassword'
import SignUpForm from '../Screens/SignupForm'
import Dashboard from '../Navigation/Drawer'
const stack = createNativeStackNavigator();
const Stack = () => {
    const [showSplashScreen, setshowSplashScreen] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setshowSplashScreen(false)
        }, 2000);
    }, []);
    return (
        <stack.Navigator>
            {showSplashScreen ? (<stack.Screen name='Splash' component={Splash} options={{ headerShown: false, }} />) : null}
            <stack.Screen name='Login' component={Login} options={{ headerShown: true, title: 'Login', }} />
            <stack.Screen name='SignUp' component={SignUpForm} options={{ headerShown: true, title: 'Sign Up', }} />
            <stack.Screen name='ForgotPasswordOtp' component={ForgotPassword} options={{ headerShown: true, title: 'Forgot Password', }} />
            <stack.Screen name='ChangePasswordScreen' component={ChangePassword} options={{ headerShown: true, title: 'Change Password', }} />
            <stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordEnterNumber} options={{ headerShown: true, title: 'Forgot Password', }} />
            <stack.Screen name='Loginotp' component={OTP} options={{ headerShown: true, title: 'Sign Up' }} />
            <stack.Screen name='Drawer' component={Dashboard} options={{ headerShown: false, title: 'Dashboard' }} />
        </stack.Navigator>
    )
}
export default Stack