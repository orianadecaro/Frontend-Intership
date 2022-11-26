import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Styles from './Style';


function ButtonMain(props) {
    return (
        <View style={Styles.btnContainer}>
            <TouchableOpacity style={Styles.btnMain} onPress={props.onPress}>
                <View style={Styles.btntextIconContainer}>
                <View style={Styles.btnIcon}>{props.icon1}</View>
                    <Text style={Styles.btnText}> {props.title}</Text>
                    <View style={Styles.btnIcon}>{props.icon2}</View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonMain;
