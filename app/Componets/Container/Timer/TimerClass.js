import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class TimerClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount = () => {
        this.timeRef = setInterval(this.tick, 1000);
    }

    //4. Whenever state or props value changed at that time do some work. 
    componentDidUpdate = (prestate , preprops) => {
        if (prestate.time !=  this.state.time) {
            console.log("componentDidUpdate");
        }
    }

    //5. It is used to realsed occupied resources when we move to another component.
    componentWillUnmount = () => {
        clearInterval(this.timeRef);
    }
    

    render() {
        return (
            <View 
                style = {{
                    width : '100%',
                    height : 100,
                    backgroundColor : 'red',
                    paddingTop:40, 
                    paddingLeft:150,
                
                }}
            >
                
                <Text>{this.state.time.toLocaleTimeString()}</Text>
            </View>
        )
    }
}