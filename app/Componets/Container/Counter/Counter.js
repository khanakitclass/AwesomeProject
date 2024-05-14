import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const hanldeIncre = () => {
        if (count < 5) {
            setCount(count+1
                
            )
        }
    }

    const handleDre = () => {
        if (count > 0) {
            setCount(count-1)
        }
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