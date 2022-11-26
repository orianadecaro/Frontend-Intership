import React, {useDispatch, useSelector} from 'react';
import { Image, Text, View } from 'react-native';
import ButtonMain from '../ButtonMain/ButtonMain';
import { MaterialIcons } from '@expo/vector-icons'; 
import Styles from './Styles';
import User from '../../assets/user.jpeg'


function HomeCard() {
    const user = useSelector(selectser);

     const dispatch = useDispatch(); 
     
     const handleLogout= () =>{
        dispatch(logout());
    }
    
    return (
        <View style={Styles.homeCardContainer} >
            <Image source={user.image} style={Styles.imageHomeCard}/>
            <Text style={Styles.textHomeCard}>That’s it, {user.name}!</Text>
            <ButtonMain icon1={<MaterialIcons name="logout" size={16} color="white" />} title={'Logout'} onPress={()=> handleLogout()}/>
        </View>
    )
}

export default HomeCard;
