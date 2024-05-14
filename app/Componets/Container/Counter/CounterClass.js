import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Counterclass extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            count : 0
        }
    }
    handleIncr= () => {

      if (this.state.count < 5) {
        this.setState({
          count:this.state.count +1
      })
      }
        
    }

    handleDcre = () => {

      if (this.state.count > 0 ) {
        this.setState({
          count:this.state.count - 1
      })
      }
        
      
    }

  render() {
    return (
      <View>
        <Text>Counterclass</Text>

        <TouchableOpacity 
             onPress={this.handleIncr}
             style={{width: '100%', height: '80', backgroundColor: 'red', padding: 20}}
             >
              
          <Text>+</Text></TouchableOpacity>

        <Text>{this.state.count} </Text>

        <TouchableOpacity
          onPress={this.handleDcre} 
          style={{width: '100%', height: '80', backgroundColor: 'red', padding: 20}}
        >
          <Text>-</Text>
        
        </TouchableOpacity>
      </View>
    )
  }
}


