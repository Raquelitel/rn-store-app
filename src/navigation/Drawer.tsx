import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import About from '../pages/About';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppDispatch } from '../store';
import { logout } from '../store/actions/auth';

type RootDrawerParamList = {
    Home: undefined,
    About: undefined
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const CustomDrawer = (props: DrawerContentComponentProps) => {

  const dispatch = useAppDispatch();

  const onHandler = () => {
    dispatch(logout())
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem 
      icon={() => <MaterialCommunityIcons name="logout" color='#1F7A8C' size={14}/>}
      label={'Logout'} 
      onPress={ onHandler }/>
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props}/>}
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
            <Drawer.Screen name='Home' component={Home} options={{
              drawerIcon: ({focused, size}) => {
                return  focused ? <MaterialCommunityIcons name="home" color='#1F7A8C' size={size} />
                : <MaterialCommunityIcons name="home-outline" color='#1F7A8C' size={size} /> ;
              }
            }}/>
            <Drawer.Screen name='About' component={About} options={{
              drawerIcon: ({focused, size}) => {
                return  focused ? <MaterialCommunityIcons name="shopping" color='#1F7A8C' size={size} />
                : <MaterialCommunityIcons name="shopping-outline" color='#1F7A8C' size={size} /> ;
            }
            }}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;