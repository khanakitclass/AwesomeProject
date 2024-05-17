import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Country from '../Componets/Container/Country/Country';
import City from '../Componets/Container/city/City';
import Home from '../Componets/Container/Home/Home';
import Details from '../Componets/Container/Details/Details';

const Stack = createNativeStackNavigator();

const Homestack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
              headerShown:false
            }}
        >
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen 
        options={{
          headerShown : true
        }}
        name="Details" 
        component={Details} />
      </Stack.Navigator>
      )
}

const ProductStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown :false
        }}
        >
        <Stack.Screen name="Country" component={Country} />
        <Stack.Screen name="city" component={City} />
      </Stack.Navigator>
      )
}

export {Homestack, ProductStack}
