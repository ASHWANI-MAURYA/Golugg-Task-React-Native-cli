import React from 'react'
import { View, Image, StyleSheet, ImageBackground } from 'react-native'
function Splash() {
    return (
        <View style={styles.Topcontainer}>
            <ImageBackground style={styles.container} source={require('../assets/icons/icon-29.png')} resizeMode="cover">
                <Image style={styles.image} resizeMode={'center'} source={require('../assets/icons/icon-28.png')} />
            </ImageBackground>
        </View>
    )
}
export default Splash
const styles = StyleSheet.create({
    Topcontainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: '100%',
    }
})