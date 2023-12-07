import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import About from '../pages/About';

type RootDrawerParamList = {
    Home: undefined,
    About: undefined
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
        screenOptions={
            {
              headerStyle: {
                backgroundColor: '#1F7A8C'
              },
              headerTitleStyle: {
                color: '#fff',
                fontWeight: '600'
              },
              headerTintColor: '#fff',
              drawerActiveTintColor: '#1F7A8C',
              drawerType: 'front',
            }
          }>
            <Drawer.Screen name='Home' component={Home}/>
            <Drawer.Screen name='About' component={About}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;