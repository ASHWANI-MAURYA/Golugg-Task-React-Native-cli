import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './Colors'
const Button = ({ title, onPress, color }) => {
    return (
        <View>
            <View style={styles.button}>
                <TouchableOpacity onPress={onPress} style={[styles.buttonBox,{backgroundColor:color?Colors.colors.ButtonRed:Colors.colors.Blue}]}>
                    <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Button
const styles = StyleSheet.create({
    button: {
        // top: 20
    },
    buttonBox: {
        padding: 15,
        borderRadius: 5, top: 20
    },
    buttonText: {
        color: Colors.colors.White, fontWeight: '500', fontSize: 17, textAlign: 'center'
    },
})