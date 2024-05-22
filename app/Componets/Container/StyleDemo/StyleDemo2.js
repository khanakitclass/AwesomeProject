import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StyleDemo2() {
  return (
    <View style = {style.container}>
        <View style = {style.box1}>

        </View>
        <View style = {style.box2}>

        </View>
    </View>
  )
}

const style = StyleSheet.create ( {
    container : {
        height : '100%',
        backgroundColor : 'red'
    },
    box1 : {
        height : '60%',
        backgroundColor : 'green',
        flex : 1

    },
    box2 : {
        height : '40%',
        backgroundColor : 'blue',
        flex: 2
    }
})