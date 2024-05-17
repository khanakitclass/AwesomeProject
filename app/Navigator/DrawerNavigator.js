import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Componets/Container/Home/Home'
import Details from '../Componets/Container/Details/Details'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Homestack, ProductStack } from './StackNavigatore';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Home" 
        component={Homestack} />
      <Drawer.Screen name="Product" component={ProductStack} />
    </Drawer.Navigator>
  )
}