import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './Styles';


function Loading() {
  return (

    <View style={styles.container}>
      <ActivityIndicator style={{ top: 80 }} size={90} color="#FFFFFF" />
      <Text style={styles.loadingtext}>Loading</Text>
    </View>

  )
}



export default Loading;
