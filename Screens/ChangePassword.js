import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Components/Colors'
import Input from '../Components/Input';
import Button from '../Components/Button'
const ChangePassword = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Page}>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: '500', lineHeight: 23, color: Colors.colors.TextColor }}>That'easy to change.Just fill up the below required fields</Text>
                </View>
                <View style={styles.inputTopBox}>
                    <View style={styles.imagebox}>
                        <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/New1.png')} />
                    </View>
                    <View style={{ width: '88%' }}>
                        <Input PasswordType={true} Placeholder={'Old Password'} />
                    </View>
                </View>
                <View style={styles.inputTopBox}>
                    <View style={styles.imagebox}>
                        <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/New1.png')} />
                    </View>
                    <View style={{ width: '88%' }}>
                        <Input Placeholder={'New Password'} />
                    </View>
                </View>
                <View style={styles.inputTopBox}>
                    <View style={styles.imagebox}>
                        <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/New1.png')} />
                    </View>
                    <View style={{ width: '88%' }}>
                        <Input PasswordType={true} Placeholder={'Confirm Password'} />
                    </View>
                </View>
                <View style={{ top: 10 }}>
                    <Button title={'Save Changes'} />
                </View>
            </View>

        </View>
    )
}

export default ChangePassword
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 30,
        marginHorizontal: 30
    },
    Page: {
        // padding: 10
    }, inputTopBox: {
        flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', borderWidth: 0
    }, imagebox: {
        width: '10%', top: 20
    },
})