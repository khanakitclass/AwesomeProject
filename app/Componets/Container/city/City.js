import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function City({cn}) {
    const [cityName , setCityName] = useState('Surat')
    const [famousPlace , setFamousPlace] = useState('Dumms');

    const changeCity = () => {
        setCityName('Baroda');
        setFamousPlace('ABCD')

    }

  return (
    <View>
      <Text>City</Text>
      <Text>{cityName}</Text>
      <Text>{famousPlace}</Text>
      <Text>My Country : {cn}</Text>
      <TouchableOpacity
            onPress={changeCity}
      >
        <Text>Change City</Text>
      </TouchableOpacity>
      
    </View>
  )
}