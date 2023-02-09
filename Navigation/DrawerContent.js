import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground,Alert } from 'react-native';
import { Caption, Drawer, Title, } from 'react-native-paper';
import { Colors } from '../Components/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
const DrawerContent = ({ navigation }) => {
    function Logout() {
        AsyncStorage.removeItem('mobile'),
            navigation.navigate('Login');
    }
    function logout() {

        Alert.alert('Golugg says', "Do you Want to logout", [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () =>
                Logout()
            },
        ])
    }
    return (
        <DrawerContentScrollView>
            <ImageBackground source={require('../assets/icons/icon-60.png')} resizeMode={'contain'} style={{ marginTop: -6 }}>
                <View style={styles.userInfoSection}>
                    <TouchableOpacity style={{ width: 60, height: 60, borderRadius: 50, overflow: 'hidden', marginTop: 40 }}  >
                        <Image style={{ width: '100%', height: '100%' }} resizeMode={'cover'} source={require('../assets/icons/icon-62.png')} />
                    </TouchableOpacity>
                    <View style={{ borderWidth: 0, marginTop: 35, marginLeft: 6 }}>
                        <Title style={[styles.title]}><Text>Abhijeet Manna</Text></Title>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 30, height: 30, marginTop: 5 }} source={require('../assets/icons/demo.png')} />
                            <Caption style={[styles.caption]}><Text>Wallet Balance :$10.10</Text></Caption>
                        </View>
                    </View>
                    <TouchableOpacity style={{ width: 15, height: 15, borderRadius: 50, overflow: 'hidden', marginTop: 30, }} onPress={() => navigation.navigate('Dashboard')}>
                        <Image style={{ width: '100%', height: '100%' }} source={require('../assets/icons/icon-61.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <Drawer.Section style={styles.drawerSection}>
                <DrawerItem key="Dashboard"
                    icon={props => <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/icon-73.png')} />}
                    label={props => <>
                        <View>
                            <Text style={styles.label}>Dashboard</Text>
                        </View>
                    </>}
                    onPress={() => navigation.navigate('Dashboard')}
                />
                <DrawerItem key="My trips"
                    icon={props => <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/icon-72.png')} />}
                    label={props => <>
                        <View>
                            <Text style={styles.label}>My trips</Text>
                        </View>
                    </>}
                />
                <DrawerItem key="My wallet"
                    icon={props => <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/icon-71.png')} />}
                    label={props => <>
                        <View>
                            <Text style={styles.label}>My wallet</Text>
                        </View>
                    </>}
                />
                <DrawerItem key="Chat"
                    icon={props => <Image style={{ width: 22, height: 20 }} source={require('../assets/icons/icon-70.png')} />}
                    label={props => <>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.label}>Chat</Text>
                            <View style={{ width: 25, height: 25, backgroundColor: Colors.colors.Red, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.label, { color: Colors.colors.White, fontSize: 13 }]}>10</Text>
                            </View>
                        </View>
                    </>}
                />
                <DrawerItem key="Notifactions"
                    icon={props => <Image style={{ width: 20, height: 23 }} source={require('../assets/icons/icon-69.png')} />}
                    label={props => <>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.label}>Notifactions</Text>
                            <View style={{ width: 25, height: 25, backgroundColor: Colors.colors.Red, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.label, { color: Colors.colors.White, fontSize: 13 }]}>24</Text>
                            </View>
                        </View>
                    </>}
                />
                <DrawerItem key="Edit profile"
                    icon={props => <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/icon-68.png')} />}
                    label={props => <>
                        <View>
                            <Text style={styles.label}>Edit profile</Text>
                        </View>
                    </>}
                    onPress={() => navigation.navigate('EditProfile')}
                />
                <DrawerItem key="Change Password"
                    icon={props => <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/icon-67.png')} />}
                    label={props => <>
                        <View>
                            <Text style={styles.label}>Change Password</Text>
                        </View>
                    </>}
                    onPress={() => navigation.navigate('ChangePassword')}
                />
                <DrawerItem key="Contact us"
                    icon={props => <Image style={{ width: 22, height: 20 }} source={require('../assets/icons/icon-66.png')} />}
                    label={props => <>
                        <View>
                            <Text style={styles.label}>Contact us</Text>
                        </View>
                    </>}
                />
                <DrawerItem key="About Us"
                    icon={props => <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/icon-65.png')} />}
                    label={props => <>
                        <View>
                            <Text style={styles.label}>About Us</Text>
                        </View>
                    </>}
                />
                <DrawerItem key="Terms and condition"
                    icon={props => <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/icon-64.png')} />}
                    label={props => <>
                        <View>
                            <Text style={styles.label}>Terms and condition</Text>
                        </View>
                    </>}
                />
                <DrawerItem key="Privacy policy / Cookies policy"
                    icon={props => <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/icon-64.png')} />}
                    label={props => <>
                        <View>
                            <Text style={styles.label}>Privacy policy / Cookies policy</Text>
                        </View>
                    </>}
                />

            </Drawer.Section>
            <DrawerItem key="Logout"
                icon={props => <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/icon-63.png')} />}
                label={props => <>
                    <View>
                        <Text style={styles.label}>Logout</Text>
                    </View>
                </>}
                onPress={logout}
            />

        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    userInfoSection: {
        paddingLeft: 20,
        marginTop: -10,
        flexDirection: 'row',
        marginBottom: 25
    },
    title: {
        marginLeft: 8,
        marginBottom: -5,
        fontSize: 19,
        color: Colors.colors.White
    },
    caption: {
        fontSize: 16,
        lineHeight: 34,
        color: Colors.colors.White
    },
    drawerSection: {
        marginTop: 15,
    },
    label: {
        fontWeight: '500', color:
            Colors.colors.LabelTextColor
    }

});
export default DrawerContent;