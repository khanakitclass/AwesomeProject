import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import City from '../city/City';

export default function Country() {
  const [countryName,setcoutryName] = useState('india');
  const [countryCode,setcountryCode] = useState('+91');

  const chnageCountry  = () => {
    setcoutryName('US');
    setcountryCode('+1');

  }

  return (
    <View>
      <Text>Country</Text>
      <Text>{countryName}</Text>
      <Text>{countryCode}</Text>
      <TouchableOpacity
          onPress={chnageCountry}
      >
        <Text>Change Country</Text>
      </TouchableOpacity>
      <City cn={countryName}/>
    </View>
  )
}