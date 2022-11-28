import React, { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form"
import { Text, View } from 'react-native';
import Styles from './Styles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import {email, password} from '../../api/index';


function FormLogin() {
    let navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const email_Regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //const pass = data.password

    const data = login;

    const { control, handleSubmit, resetField, setFocus, formState: { errors } } = useForm({ defaultValues: {
        firstName: '',
        lastName: ''
      }});

    const onSubmit = data => {
        //console.log(data)
        resetField("Email, Password")
        navigation.navigate('Home')
    }
 
    useEffect(() => {
        setFocus("Email, Password", { shouldSelect: true });
      
      }, [setFocus]);
    
      console.log(errors)

    return (
        <View style={Styles.formContainer} showsVerticalScrollIndicator={false}>

            <View style={Styles.textContainer} >
                <Text style={Styles.title}>Welcome, Stranger!</Text>
                <Text style={Styles.subtitle}>Please log in to this form if you wish to pass the exam.</Text>
            </View>

            <View style={Styles.inputContainer}>

                <CustomInput
                    control={control}
                    name="Email"
                    rules={{
                        required: {
                            value: true,
                            message: 'Email is required!'
                        },
                        pattern: {
                            value: email_Regex,
                            message: "It's not a valid email"
                        },
                        validate:
                            value => value === email_Regex || 'Email is not correct'

                    }}
                    placeholder="Email"
                    


                />

                <CustomInput
                    control={control}
                    name="Password"
                    rules={{
                        minLength: 3,
                        required: {
                            value: true,
                            message: 'Password is required!'
                        },
                        validate:
                            value => value === pass || 'Password is not correct'
                    }}
                    placeholder="Password"
                    secureTextEntry={true}
                   


                />


            </View>

            <CustomButton title={'Login'}
                icon2={<AntDesign name="arrowright" size={16} color="white" />}
                onPress={handleSubmit(onSubmit)}
            />


        </View>
    )
}

export default FormLogin;
