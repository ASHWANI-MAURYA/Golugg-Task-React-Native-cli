import * as React from 'react';
import { Button, View, Image, Text, Pressable, Alert, TouchableOpacity, useWindowDimensions } from 'react-native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import { Colors } from '../Components/Colors';
import ChangePassword from '../Screens/ChangePassword'
import EditProfile from '../Screens/EditProfile'
import Dashboard from '../Screens/Dashboard'
const Drawer = createDrawerNavigator();
const DrawerStudent = () => {
  const dimensions = useWindowDimensions();
  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />} screenOptions={{
          drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
          drawerStyle: {
            width: 330,
          },
          headerTintColor: Colors.colors.TextColor,
          headerRight: () => {
            return (
              <View style={{ marginRight: 19 }}>
                <TouchableOpacity>
                  <Image style={{ width: 30, height: 30, top: 2, marginHorizontal: 5 }} source={require('../assets/icons/icon-2.png')} />
                </TouchableOpacity>
              </View>
            )
          },
          headerLeft: () => {
            return (
              <View style={{ flexDirection: 'row', marginRight: -10 }}>
                <View>
                  <DrawerToggleButton tintColor='#002788' />
                </View>
              </View>
            )
          },
        }}
      >
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile' }} />
        <Drawer.Screen name="ChangePassword" component={ChangePassword} options={{ title: 'Change Password' }} />
      </Drawer.Navigator>
    </>
  );
}
export default DrawerStudent