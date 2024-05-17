import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Componets/Container/Home/Home'
import City from '../Componets/Container/city/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from './DrawerNavigator';
import { ProductStack } from './StackNavigatore';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen

      options={{
        headerShown:false
      }}
       name="Home" component={DrawerNavigator} />
      <Tab.Screen name="City" component={City} />
      <Tab.Screen name="Product" component={ProductStack} />
    </Tab.Navigator>
  )
}