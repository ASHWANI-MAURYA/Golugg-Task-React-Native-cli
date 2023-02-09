import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { Colors } from '../Components/Colors';
import Input from '../Components/Input';
import Button from '../Components/Button'
import Dropdown from '../Components/dropdown'
const EditProfile = ({navigation}) => {
    const [dataAwardCategory, setdataAwardCategory] = useState(function () {
        let api_data = [
            { label: 'India', value: 'India' },
            // { label: 'India', value: 'India' },
        ];
        return api_data;
    });
    const [dataAwardCategorySelectionId, setdataAwardCategorySelectionId] = useState(null);
    return (
        <ScrollView>
            <View>
                <View style={styles.Page}>
                    <ImageBackground source={require('../assets/icons/icon-86.png')} resizeMode={'stretch'}>
                        <View style={styles.TopContainerCard}>
                            <View>
                                <View>
                                    <View style={styles.Profile}  >
                                        <Image style={{ width: '100%', height: '100%' }} resizeMode={'cover'} source={require('../assets/icons/icon-100.png')} />
                                    </View>
                                </View>
                                <View style={{ position: 'absolute', }}>
                                    <TouchableOpacity style={{ top: 20, marginLeft: 50 }}>
                                        <View style={{ width: 28, height: 28, }}>
                                            <Image style={{ width: '100%', height: '100%' }} resizeMode={'cover'} source={require('../assets/icons/icon-81.png')} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.DownText}>
                                <Text style={styles.Name}>Abhikeet Chatterjee</Text>
                                <Text style={styles.Phone}>+91 9876543210</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.container}>
                        <View style={styles.inputTopBox}>
                            <View style={styles.imagebox}>
                                <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/icon-34.png')} />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Input Placeholder={'First Name'} />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Input Placeholder={'Last Name'} />
                            </View>
                        </View>
                        <View style={styles.inputTopBox}>
                            <View style={styles.imagebox}>
                                <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/Email.png')} />
                            </View>
                            <View style={{ width: '88%' }}>
                                <Input Placeholder={'Email (Optional)'} />
                            </View>
                        </View>
                        <View style={styles.inputTopBox}>
                            <View style={styles.imagebox}>
                                <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/New.png')} />
                            </View>
                            <View style={{ width: '88%' }}>
                                <Input Placeholder={'Phone Number'} />
                            </View>
                        </View>
                        <View style={styles.inputTopBox}>
                            <Text style={{ fontWeight: '500', fontSize: 18 }}>
                                Address information
                            </Text>
                        </View>
                       
                        <View style={styles.inputTopBox}>
                            <View style={[styles.imagebox,{marginTop:-10}]}>
                                <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/icon-77.png')} />
                            </View>
                            <View style={{ width: '88%' }}>
                            <Dropdown bindDataAwardCategory={dataAwardCategory} my_value={dataAwardCategorySelectionId} my_onChangeText={setdataAwardCategorySelectionId} />
                            </View>
                        </View>
                        <View style={styles.inputTopBox}>
                            <View style={styles.imagebox}>
                                <Image style={{ width: 25, height: 29, }} source={require('../assets/icons/icon-76.png')} />
                            </View>
                            <View style={{ width: '88%' }}>
                                <Input Placeholder={'State'} />
                            </View>
                        </View>
                        <View style={styles.inputTopBox}>
                            <View style={styles.imagebox}>
                                <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/icon-75.png')} />
                            </View>
                            <View style={{ width: '88%' }}>
                                <Input PasswordType={true} Placeholder={'City'} />
                            </View>
                        </View>
                        <View style={styles.inputTopBox}>
                            <View style={styles.imagebox}>
                                <Image style={{ width: 28, height: 24, }} source={require('../assets/icons/icon-74.png')} />
                            </View>
                            <View style={{ width: '88%' }}>
                                <Input PasswordType={true} rightSide={<Image style={{ width: 25, height: 25, }} source={require('../assets/icons/icon-80.png')} />} Placeholder={'Fulladdress'} />
                            </View>
                        </View>
                        <View>
                            <Button color={true} title={'Save All Changes'} />
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                                <Text style={{ color: Colors.colors.Blue, textAlign: 'center', fontWeight: '500',fontSize:16 }}>Change Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default EditProfile
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginVertical: 30,
        marginHorizontal: 30,
        // borderWidth: 1
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
    }, inputTopBox: {
        flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', borderWidth: 0
    }, imagebox: {
        width: '5%', top: 20
    }
})