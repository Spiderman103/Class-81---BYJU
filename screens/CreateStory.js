import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class CreateStory extends Component{
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

            <Text> Create Story </Text>
            </View>
        )
    }
}