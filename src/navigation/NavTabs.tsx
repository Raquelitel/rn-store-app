import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Navigators
import { ShopNavigator } from './NavShop';
import DrawerNavigator from './Drawer';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen 
            name='DrawerStack' 
            component={DrawerNavigator}
            options={{
                tabBarLabel:'Home',
                tabBarIcon: ({focused, size}) => {
                    return  focused ? <MaterialCommunityIcons name="home" color='#1F7A8C' size={size} />
                    : <MaterialCommunityIcons name="home-outline" color='#1F7A8C' size={size} /> ;
                }
            }}/>
            <Tab.Screen 
            name='NavShopStack' 
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