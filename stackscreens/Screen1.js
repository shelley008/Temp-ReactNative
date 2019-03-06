
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';
import OrdersPage from "../screens/ordersPage";


export default class ScreenOne extends Component{


    static navigationOptions = {
        // headerTitle: "Home2222",
        title:'第一'
    };

    // static navigationOptions = ({navigation}) => ({
    //     header:null,
    // });

    render(){
        return (
            <View style={{flex:1}}>
                <TouchableOpacity  style={{top:300,left:60}} onPress={()=> {
                    this.props.navigation.navigate('OrdersPage')
                }}>
                    <Text style ={{fontWeight:'bold',fontSize:30}}>7777</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

