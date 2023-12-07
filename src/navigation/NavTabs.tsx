import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Routing } from './Routing';
import { ShopNavigator } from './NavShop';
import home from 'react-native-vector-icons/MaterialIcons';
import { ImageComponent } from 'react-native';
import { Icon } from '@gluestack-ui/themed';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen 
            name='Routing' 
            component={Routing}
            options={{
                tabBarLabel:'Home',
                tabBarIcon: ({focused, size}) => {
                    return  focused ? <MaterialCommunityIcons name="home" color='#1F7A8C' size={size} />
                    : <MaterialCommunityIcons name="home-outline" color='#1F7A8C' size={size} /> ;
                }
            }}/>
            <Tab.Screen 
            name='NavShop' 
            component={ShopNavigator}
            options={{
                tabBarLabel: 'Shop',
                tabBarIcon: ({focused, size}) => {
                    return  focused ? <MaterialCommunityIcons name="store" color='#1F7A8C' size={size} />
                    : <MaterialCommunityIcons name="store-outline" color='#1F7A8C' size={size} /> ;
                }
            }}/>
        </Tab.Navigator>
    )
}

export default TabsNavigator;