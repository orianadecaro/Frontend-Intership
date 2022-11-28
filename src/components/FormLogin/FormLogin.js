import React from 'react';
import { Controller, useForm } from "react-hook-form"
import { Text, TextInput, View } from 'react-native';
import Styles from './Styles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../CustomButton/CustomButton';
import login from '../../api/index';


function FormLogin() {
    let navigation = useNavigation();
    const email_Regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const { control, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        const res = await login({ email: data.email, password: data.password });
        console.log(res)

        if (res.data.name) {
            navigation.navigate('Home')
        } else {
            Alert.alert('Oops something is wrong');
        }

    };



    console.log(errors)

    return (
        <View style={Styles.formContainer} >

            <View style={Styles.textContainer} >
                <Text style={Styles.title}>Welcome, Stranger!</Text>
                <Text style={Styles.subtitle}>Please log in to this form if you wish to pass the exam.</Text>
            </View>

            <View style={Styles.inputContainer}>

                <Controller
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Email is required!'
                        },
                        pattern: {
                            value: email_Regex,
                            message: "It's not a valid email"
                        }


                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error, isTouched } }) => (
                        <TextInput
                            style={[Styles.input, { borderColor: !isTouched ? '#ffffff' : '#2F7BFF' && error ? '#FF0044' : '#2F7BFF' }]}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder='email'
                        />
                    )}
                    name="email"
                />
                {errors.email && (<Text style={{ color: '#FF0044', borderColor: '#FF0044' }}> {errors.message || 'Email is required!'}  </Text>)}

                <Controller
                    control={control}
                    rules={{
                        minLength: 3,
                        required: {
                            value: true,
                            message: 'Password is required!'
                        }

                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error, isTouched } }) => (
                        <TextInput
                            style={[Styles.input, { borderColor: !isTouched ? '#ffffff' : '#2F7BFF' && error ? '#FF0044' : '#2F7BFF' }]}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder='password'
                            secureTextEntry={true}
                        />
                    )}
                    name="password"
                />

                {errors.password && (<Text style={{ color: '#FF0044', borderColor: '#FF0044' }}> {errors.message || 'Password is required!'}  </Text>)}

                <CustomButton title={'Login'} style={Styles.btn}
                    icon2={<AntDesign name="arrowright" size={16} color="white" />}
                    onPress={handleSubmit(onSubmit)} />


            </View>





        </View>
    )
}

export default FormLogin;
