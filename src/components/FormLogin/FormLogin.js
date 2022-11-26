import React, { useState, useDispatch } from 'react';
import { Text, View, Alert } from 'react-native';
import ButtonMain from '../ButtonMain/ButtonMain';
import InputLogin from '../Input/Input';
import { AntDesign } from '@expo/vector-icons';
import Styles from './Styles';
import { useForm, Controller } from "react-hook-form";


function FormLogin() {
    const [active, setActive] = useState("");
    const [email, SetEmail] = useState("");
    const [pass, SetPass] = useState("");
    const [loading, setLoading]= useState(false);

    const dispatch = useDispatch();


    const handleSubmit=() => {
       
        dispatch(login({
            email: email,
            password: passswod,
            loggedIn: true
       } ));
    }

    return (
        <View style={Styles.formContainer}>
            <View style={Styles.textContainer} >
                <Text style={Styles.title}>Welcome, Stranger!</Text>
                <Text style={Styles.subtitle}>Please log in to this form if you wish to pass the exam.</Text>
            </View>

            {active ? (
                <View style={Styles.inputContainer1}>

                    <InputLogin placeholder={'Email'}
                        onChange={SetEmail}
                        value={email}
                        style={{ borderColor: '#2F7BFF',      borderBottomWidth: 1, }}
                    />
                    <InputLogin placeholder={'Password'}
                        secureTextEntry={true}
                        keyboardType="password"
                        onChange={SetPass}
                        value={pass}
                        style={{ borderColor: '#2F7BFF',      borderBottomWidth: 1, }}

                    />
                </View>) : (

                <View style={Styles.inputContainer2}>

                    <InputLogin placeholder={'Email'}
                    />
                    <InputLogin placeholder={'Password'}
                    />
                </View>

            )}


            <ButtonMain title={'Login'}
                icon2={<AntDesign name="arrowright" size={16} color="white" />}
                onPress={(() => handleSubmit())} 
           
             / > 
               
           
            
         
        </View>
    )
}

export default FormLogin
 //  onFocus() {
    this.setState({
        backgroundColor: 'green'
    })
  },

  onBlur() {
    this.setState({
      backgroundColor: '#ededed'
    })
  },  

<TextInput 
    onBlur={ () => this.onBlur() }
    onFocus={ () => this.onFocus() }
    style={{ height:60, backgroundColor: this.state.backgroundColor, color: this.state.color }}  />