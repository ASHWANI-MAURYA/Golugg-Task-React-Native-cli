import React, { useState, useRef, useEffect } from "react";
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Colors } from './Colors'
function Otpinput({ setFinalOTP }) {
  // const [mytext, setMytext] = useState("");

  const onChangeHandle = (pin1, pin2, pin3, pin4, pin5, pin6) => {
    setFinalOTP(pin1 + pin2 + pin3 + pin4 + pin5 + pin6)
  }

  const pin1Ref = useRef(null)
  const pin2Ref = useRef(null)
  const pin3Ref = useRef(null)
  const pin4Ref = useRef(null)
  const pin5Ref = useRef(null)
  const pin6Ref = useRef(null)

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");

  return (<View style={{ margin: 1, flexDirection: "row" }}>
    <TextInput autoFocus={true} ref={pin1Ref} style={styles.otpbox}
      onChangeText={(value) => { setPin1(value); onChangeHandle(value, pin2, pin3, pin4, pin5, pin6); }}
      maxLength={1} keyboardType={"number-pad"} onChange={(pin1) => {

        if (pin1 != "") {
          pin2Ref.current.focus();
        }
      }}
    />
    <TextInput ref={pin2Ref} style={styles.otpbox}
      onChangeText={(value) => { setPin2(value); onChangeHandle(pin1, value, pin3, pin4, pin5, pin6); }}
      maxLength={1} keyboardType={"number-pad"}
      onChange={(pin2) => {
        if (pin2 != "") {
          pin3Ref.current.focus();
        }
      }}
    />
    <TextInput ref={pin3Ref} style={styles.otpbox}
      onChangeText={(value) => { setPin3(value); onChangeHandle(pin1, pin2, value, pin4, pin5, pin6); }}
      maxLength={1} keyboardType={"number-pad"} onChange={(pin3) => {
        if (pin3 != "") {
          pin4Ref.current.focus();
        }
      }}
    />
    <TextInput ref={pin4Ref} style={styles.otpbox}
      onChangeText={(value) => { setPin4(value); onChangeHandle(pin1, pin2, pin3, value, pin5, pin6); }}
      maxLength={1} keyboardType={"number-pad"} onChange={(pin4) => {
        if (pin4 != "") {
          pin5Ref.current.focus();
        }
      }}
    />
    <TextInput ref={pin5Ref} style={styles.otpbox}
      onChangeText={(value) => { setPin5(value); onChangeHandle(pin1, pin2, pin3, pin4, value, pin6); }}
      maxLength={1} keyboardType={"number-pad"} onChange={(pin5) => {
        if (pin5 != "") {
          pin6Ref.current.focus();
        }
      }}
    />
    <TextInput ref={pin6Ref} style={styles.otpbox}
      onChangeText={(value) => { setPin6(value); onChangeHandle(pin1, pin2, pin3, pin4, pin5, value); }}
      maxLength={1} keyboardType={"number-pad"} onChange={(pin6) => {
      }}
    />
  </View>);
}
export default Otpinput;
const styles = StyleSheet.create({
  otpbox: {
    marginTop: 10,
    width: 45,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderColor: Colors.colors.inputBorderColor,
    borderRadius: 4,
    fontSize: 20,
    textAlign: 'center'
  }
})