import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function TimerFun() {
    const [time ,setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    }

    useEffect(() => {
      const timeInterval = setInterval(() => tick() ,1000)
        
        return () => {
          clearInterval(timeInterval);
        }

    } , [time])

  return (
    <View>
      <Text style = {{fontSize : 100, fontFamily :'Roboto-ThinItalic' }}>Hello</Text>
      <Text><MaterialIcons name ="home" size={30} color='red'/>timerFun</Text>
      <Text> {time.toLocaleTimeString()}</Text>
    </View>
  )
}