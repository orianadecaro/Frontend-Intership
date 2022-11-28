import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, View, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Styles from './Style';

function CustomInput({ placeholder, rules = {},  control, name, secureTextEntry }) {
    return (

        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onchange, onBlur, value }, fieldState: { error, isTouched } }) => (
                <>
                    <View style={[Styles.inputContainer, { borderColor: error ? '#FF0044' : '#2F7BFF' }]}>

                        <TextInput
                            placeholder={placeholder}
                            onBlur={onBlur}
                            onChangeText={onchange}
                            value={value}
                            style={[Styles.input, {borderColor: isTouched ? '#2F7BFF' :'transparent' }]}
                            secureTextEntry={secureTextEntry}
                           


                        />
                    </View>

                    {error && (<Text style={{ color: '#FF0044', alignSelf: 'strech' }}> {error.message} <EvilIcons name="close" size={24} color="#FF0044" /></Text>)}
                </>
            )}

        />

    )
}

export default CustomInput;
