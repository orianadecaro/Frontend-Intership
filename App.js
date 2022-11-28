import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Mainstack from './src/navigation/Mainstack';
import { StatusBar } from 'expo-status-bar';
import Welcome from './src/screen/Welcome/Welcome'


export default function App() {
  const [Load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }, []);

  if (Load) {
    return <Welcome />;
  }


  return (

    <NavigationContainer >
      <Mainstack />
      <StatusBar style="auto" />
    </NavigationContainer>

  );
}
