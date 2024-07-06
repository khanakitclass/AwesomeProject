import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { ProductStack } from './app/Navigator/StackNavigatore'
import DrawerNavigator from './app/Navigator/DrawerNavigator';
import BottomNavigator from './app/Navigator/BottomNavigator';
import { configerstore } from './app/Componets/Container/Redux/store';



export default function App() {
  const store = configerstore();
  return (
    <Provide store ={store}>
    <NavigationContainer>
     <BottomNavigator/>
    </NavigationContainer>
    </Provide>
  )
}

//rnf