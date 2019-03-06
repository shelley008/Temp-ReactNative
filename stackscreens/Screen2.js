
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';
import ProfilePage from "../screens/profilePage";


export default class ScreenTwo extends Component{

    static navigationOptions = {
        title: "Home2222",
    };

    render(){
        return (
            <View style={{flex:1}}>

                <TouchableOpacity
                    style={{top:100,left:100}}

                    onPress={()=> {
                        this.props.navigation.navigate('ProfilePage')
                    }}>

                    <Text>Sayfa 2</Text>

                </TouchableOpacity>
                
            </View>
        )
    }
};

