import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Cityclass extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            CityName : 'Surat',
            FamousPlace : 'Dumms'
        }
    }

    changecity = () => {
        console.log("vvv");
        this.setState({
           CityName : 'Ahmedabad',
            FamousPlace : 'Sabarmati River Front'
        })
    }
    
  render() {
    return (
      <View>
        <Text>Cityclass</Text>
        <Text>Country Name :{this.props.cn}</Text>
        <Text>Country Code : {this.props.cc}</Text>
        <Text>My name : {this.props.myName}</Text>
        <Text>City Name : {this.state.CityName}</Text>
        <Text>Famous Place : {this.state.FamousPlace}</Text>
        <TouchableOpacity
          style={{width: '100%', backgroundColor: 'gray', height: 99}}
          onPress={this.changecity}
        >
          <Text>Change City</Text>
        </TouchableOpacity>
      </View>
    )
  }
}