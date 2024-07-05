import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../Redux/action/counter.action';

export default function Counter() {
   
    const dispatch  = useDispatch(); //3

    const hanldeIncre = () => {
       dispatch(increment());
    }

    const handleDre = () => {
        dispatch(decrement());
    }
    return (
        <View>
            <Text>Counter Function </Text>
            <TouchableOpacity
                onPress={hanldeIncre}
                style={{width: '100%', height: '80', backgroundColor: 'red', padding: 20}}
            >
                <Text>+</Text>
            </TouchableOpacity>

            <Text>{count}</Text>


            <TouchableOpacity
                onPress={handleDre}
                style={{width: '100%', height: '80', backgroundColor: 'red', padding: 20}}
            >
                <Text>-</Text>
            </TouchableOpacity>
        </View>
    )
}