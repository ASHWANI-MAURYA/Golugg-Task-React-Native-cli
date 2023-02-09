import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Components/Colors';
import Input from '../Components/Input';
import Button from '../Components/Button'
const Dashboard = () => {
  return (
    <ScrollView >
        <View>
          <ImageBackground source={require('../assets/icons/icon-86.png')} resizeMode={'stretch'}>
            <View style={styles.TopContainerCard}>
              <View>
                <View>
                  <View style={styles.Profile}  >
                    <Image style={{ width: '100%', height: '100%' }} resizeMode={'cover'} source={require('../assets/icons/icon-100.png')} />
                  </View>
                </View>
              </View>
              <View style={styles.DownText}>
                <Text style={styles.Name}>Abhikeet Chatterjee</Text>
                <Text style={styles.Phone}>+91 9876543210</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={styles.Card}>
                <View style={{ width: 40, height: 50 }}>
                  <Image style={{ width: '100%', height: '100%' }} source={require('../assets/icons/clock.png')} />
                </View>
                <View style={{ padding: 5 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', color: Colors.colors.TextColor }}>Past Trips</Text>
                  <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.colors.Blue, textAlign: 'center' }}>18</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Card}>
                <View style={{ width: 40, height: 50 }}>
                  <Image style={{ width: '100%', height: '100%' }} source={require('../assets/icons/icon-83.png')} />
                </View>
                <View style={{ padding: 5 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', color: Colors.colors.TextColor }}>Cancel Trip</Text>
                  <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.colors.Blue, textAlign: 'center' }}>10</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Card}>
                <View style={{ width: 40, height: 50 }}>
                  <Image style={{ width: '100%', height: '100%' }} source={require('../assets/icons/icon-82.png')} />
                </View>
                <View style={{ padding: 5 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', color: Colors.colors.TextColor }}>Wallet Balance</Text>
                  <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.colors.Blue, textAlign: 'center' }}>$20.00</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 15 }}>
              <Text style={{ fontWeight: '500', fontSize: 16, textTransform: 'uppercase', color: Colors.colors.TextColor }}>Recent Trip</Text>
            </View>
            <View style={styles.TripCard}>
              <View style={{ padding: 13 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: Colors.colors.LabelTextColor, fontWeight: 'bold', fontSize: 15 }}>ID : AB-111-0004</Text>
                  <Text style={{ color: Colors.colors.Blue, fontWeight: 'bold', fontSize: 15 }}>$40.00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 }}>
                  <Text style={{ color: Colors.colors.TextColor, fontWeight: '500', fontSize: 15 }}>Industrial Machinery Product</Text>
                  <Text style={{ color: Colors.colors.inputBorderColor, fontWeight: '400', fontSize: 11 }}>Payment Pending</Text>
                </View>
              </View>
              <View style={{ borderBottomWidth: 0.5, borderColor: Colors.colors.inputBorderColor }}>
              </View>
              <View style={{ padding: 13, }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 15, height: 15 }}>
                    <Image style={{ width: '100%', height: '100%' }} source={require('../assets/icons/icon-18.png')} />
                  </View>
                  <View style={{ marginTop: -3, marginLeft: 10, }} >
                    <Text >Rajeev Colony, Panjab Bagh, Nereal, Delhi, 100..</Text>
                  </View>
                </View>
                <View style={{ width: 4, height: 25, marginLeft: 6, marginVertical: 2 }}>
                  <Image style={{ width: '100%', height: '100%' }} source={require('../assets/icons/bluedot.png')} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 15, height: 15 }}>
                    <Image style={{ width: '100%', height: '100%' }} source={require('../assets/icons/icon-5.png')} />
                  </View>
                  <View style={{ marginTop: -3, marginLeft: 10 }} >
                    <Text >Abc Road, Bawana Industrial, Sec-1 Bawana, ....</Text>
                  </View>
                </View>
              </View>
              <View style={{ borderBottomWidth: 0.5, borderColor: Colors.colors.inputBorderColor }}>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', borderRightWidth: 0.5, borderColor: Colors.colors.inputBorderColor, padding: 13 }}>
                  <View style={{ width: 20, height: 15 }}>
                    <Image style={{ width: '100%', height: '100%', }} source={require('../assets/icons/icon-46.png')} />
                  </View>
                  <View style={{ marginTop: -3, marginLeft: 5 }}>
                    <Text style={{ fontSize: 11, marginTop: 4, fontWeight: '500' }}>Eicher 19FT</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', borderRightWidth: 0.5, borderColor: Colors.colors.inputBorderColor, padding: 13 }}>
                  <View style={{ width: 15, height: 15 }}>
                    <Image style={{ width: '100%', height: '100%', }} source={require('../assets/icons/icon-45.png')} />
                  </View>
                  <View style={{ marginTop: -3, marginLeft: 5 }}>
                    <Text style={{ fontSize: 11, marginTop: 4, fontWeight: '500' }}>410 Km</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 13 }}>
                  <View style={{ width: 15, height: 15 }}>
                    <Image style={{ width: '100%', height: '100%', }} source={require('../assets/icons/icon-44.png')} />
                  </View>
                  <View style={{ marginTop: -3, marginLeft: 5 }}>
                    <Text style={{ fontSize: 11, marginTop: 4, fontWeight: '500' }}>2020-06-10</Text>
                  </View>
                </View>
                <View style={{ padding: 13 }}>
                  <View style={{ width: 31, height: 5.5, marginTop: 6, marginLeft: -13 }}>
                    <Image style={{ width: '100%', height: '100%', }} source={require('../assets/icons/icon-59.png')} />
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginTop:'25%' }}>
              <Button color={true} title={'Book A Truck'} />
            </View>
          </View>
        </View>
    </ScrollView>
  )
}

export default Dashboard
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginVertical: 30,
    marginHorizontal: 20,
  },
  TopContainerCard: {
    justifyContent: 'center', alignItems: 'center'
  },
  Profile: {
    width: 80, height: 80, borderRadius: 50, overflow: 'hidden', marginTop: 20
  }, Phone: {
    color: Colors.colors.White, textAlign: 'center', fontSize: 13, marginVertical: 5
  }
  , Name: {
    color: Colors.colors.White, textAlign: 'center', fontSize: 16
  },
  DownText: {
    marginVertical: 10
  }, Card: {
    borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: '31%', backgroundColor: '#FFFFFF', shadowColor: '#000', elevation: 5,

  }, TripCard: {
    borderRadius: 10, width: '100%', backgroundColor: '#FFFFFF', shadowColor: '#000', elevation: 5,
  }
})