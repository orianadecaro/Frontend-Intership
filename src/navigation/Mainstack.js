import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screen/Login/Login';
import Home from '../screen/Home/Home';

const Stack = createNativeStackNavigator();


function Mainstack() {
    return (

        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home", headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={Login}

            />
        </Stack.Navigator>

    );
}

export default Mainstack;
