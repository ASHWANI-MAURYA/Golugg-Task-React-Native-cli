import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from './Colors';

const DropdownComponent = (props) => {
    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={props.bindDataAwardCategory}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Country"
            value={props.my_value}
            onChange={props.my_onChangeText}
            renderRightIcon={() => (
                <AntDesign style={styles.icon} color={Colors.colors.inputPlaceholder} name="down" size={16} />
            )}
        />
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        padding: 1,
        borderBottomWidth: 1,
        borderColor: "#bdbdbd",
    },
    icon: {
        // marginRight: 20,
    },
    placeholderStyle: {
        fontSize: 15,
        color: Colors.colors.inputBorderColor,
    },
    selectedTextStyle: {
        color: Colors.colors.inputBorderColor,
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 10,
        fontSize: 16,
    },
});