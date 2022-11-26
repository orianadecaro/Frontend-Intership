import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, View } from 'react-native';
import Logo1 from '../../assets/logo1.png';
import Logo2 from '../../assets/logo2.png';
import Styles from './Styles';



function Background( {children}) {
    return (
      
        <LinearGradient
            colors={['#AC53FF', '#4439FF']}
            style={Styles.bgContainer}
        >
            <View style={Styles.bgLogoContainer}>
                <Image source={Logo1} style={Styles.logo1}/>
                <Image source={Logo2} style={Styles.logo2} />
            </View>
            <View>
            {children}</View>
        </LinearGradient>
        
    )
}

export default Background;
