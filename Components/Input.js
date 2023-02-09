import React, { useEffect, useState, useRef } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Animated,
} from "react-native";
import { Colors } from "./Colors";
const Input = ({ Placeholder, PasswordType, rightSide,InputValue }) => {
    const [value, setValue] = useState("");
    const moveText = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (value !== "") {
            moveTextTop();
        } else if (value === "") {
            moveTextBottom();
        }
    }, [value])
    const onFocusHandler = () => {
        if (value !== "") {
            moveTextTop();
        }
    };

    const onBlurHandler = () => {
        if (value === "") {
            moveTextBottom();
        }
    };

    const moveTextTop = () => {
        Animated.timing(moveText, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
        InputValue(value)
    };

    const moveTextBottom = () => {
        Animated.timing(moveText, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const yVal = moveText.interpolate({
        inputRange: [0, 1],
        outputRange: [4, -20],
    });

    const animStyle = {
        transform: [
            {
                translateY: yVal,
            },
        ],
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.animatedStyle, animStyle]}>
                <Text style={[styles.label]}>{Placeholder}</Text>
            </Animated.View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{ width: '90%' }}>
                    <TextInput secureTextEntry={PasswordType}
                        autoCapitalize={"none"}
                        style={styles.input}
                        value={value}
                        onChangeText={setValue}
                        editable={true}
                        onFocus={onFocusHandler}
                        onBlur={onBlurHandler}
                        blurOnSubmit

                    />
                </View>
                <View style={{ width: '10%' }}>
                    {rightSide}
                </View>
            </View>
        </View>
    );
};
export default Input;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: Colors.colors.inputPlaceholder,
        borderRadius: 2,
    },
    input: {
        fontSize: 16,
        height: 35,
        color: "#000",
    },
    label: {
        color: "grey",
        fontSize: 14,
    },
    animatedStyle: {
        top: 5,
        position: 'absolute',
    },
});