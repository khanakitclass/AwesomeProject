import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StyleDemo1() {
  return (
    <View>
      <Text style = {style.container}>StyleDemo1</Text>
      <Text style = {[style.red,style.primary]}>Hello</Text>
    </View>
  )
}


const style = StyleSheet.create({
  container : {
    marginHorizontal : 100
  },
  red : {
    color : 'red'
  },
  primary : {
    fontSize : 100
  }
})