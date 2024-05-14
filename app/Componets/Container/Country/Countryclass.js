import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Cityclass from '../city/Cityclass';

export default class Countryclass extends Component {

  constructor(props) {
    super(props);
    
    this.state= {
      countryName :'india',
      countryCode : '+91'

    }

    
  }

  changeCountry = () => {
    console.log("vvv");
    this.setState({
      countryName :'US',
      countryCode : '+1'
    })
  }
  
  render() {
    return (
      <View>
        <Text>Country class</Text>
        <Text>Country Name : {this.state.countryName}</Text>
        <Text>Country Code : {this.state.countryCode}</Text>

        <TouchableOpacity 
          style={{width: '100%', backgroundColor: 'gray', height: 99}}
          onPress={this.changeCountry}
        >
          <Text>Change Country</Text>
        
        </TouchableOpacity>
        
        <Cityclass cn={this.state.countryName} cc= {this.state.countryCode} myName={"varshil"}/>
      </View>
    )
  }
}