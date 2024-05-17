import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { ProductStack } from './app/Navigator/StackNavigatore'
import DrawerNavigator from './app/Navigator/DrawerNavigator';
import BottomNavigator from './app/Navigator/BottomNavigator';



export default function App() {
  return (
    <NavigationContainer>
     <BottomNavigator/>
    </NavigationContainer>
  )
}

//rnf