import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Mainstack from './src/navigation/Mainstack';
import { StatusBar } from 'expo-status-bar';
import { store } from './src/redux/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Mainstack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
