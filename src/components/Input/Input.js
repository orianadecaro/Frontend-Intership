import React from 'react';
import { TextInput, View } from 'react-native';
import Styles from './Style';

function InputLogin(props) {
    return (
        <View style={Styles.inputContainer}>
           <TextInput 
            placeholder={props.placeholder} 
            value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            keyboardType={props.keyboardType}
            style={Styles.inputText} 

            />
        </View>
    )
}

export default InputLogin;
