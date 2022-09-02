import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class FeedScreen extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style = {{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Feed Screen</Text>
            </View>
        )
    }
}