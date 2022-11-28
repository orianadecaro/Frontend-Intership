import React from 'react'
import { Text, View,Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import Styles from './Styles';
import image from '../../assets/user.jpeg'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../CustomButton/CustomButton';



function HomeCard() { 
    let navigation = useNavigation();

    const logout = () =>{
        navigation.navigate('Login')
    }

    return (
        <View style={Styles.homeCardContainer} >
          <Image source={image} style={Styles.imageHomeCard}/> 
            <Text style={Styles.textHomeCard}>That’s it, Elon!</Text>
            <CustomButton icon1={<MaterialIcons name="logout" size={16} color="white" />} title={'Logout'}    onPress={logout}   />
        </View>
    )
}

export default HomeCard;
