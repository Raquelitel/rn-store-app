import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Login from '../pages/Login';
import About from '../pages/About';


export type RootStackParamList = {
  Home: undefined,
  Login: undefined,
  About: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routing = () => {
  return (
    <Stack.Navigator 
    initialRouteName="Home"
    screenOptions={
      {
        headerStyle: {
          backgroundColor: '#1F7A8C'
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: '600'
        },
        headerBackTitleVisible: false,
        headerTintColor: '#fff'
      }
    }
    >
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="About" component={About}/>
  </Stack.Navigator>

  );
};