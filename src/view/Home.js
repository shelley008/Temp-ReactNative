
import {Platform, StyleSheet, Text, View, Button,Image} from 'react-native';
import {createBottomTabNavigator,createNavigationContainer,createMaterialTopTabNavigator} from 'react-navigation';
import Conference from './Conference';
import Contact from './Contact';
import Setting from './Setting';


import * as baseStyle from "../styles/base";

const BottomTabNav = createBottomTabNavigator({
    Conference:{
        screen:Conference,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '会议',
            headerStyle: {
                backgroundColor: 'red'
            }
        })
    },
    Contact:{
        screen:Contact,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '通讯录',
            headerStyle: {
                backgroundColor: 'red',
            }
        })
    },
    Setting:{
        screen:Setting,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '我的',
            headerStyle: {
                backgroundColor: 'red',
            },
        }),
    },
},
    {
        tabBarOptions: {
            showIcon: true,
            activeTintColor: '#0089ff',
            labelStyle: {
                fontSize:18,
            },
            style: {
                backgroundColor: '#d2d2d2 ',
            },
        }
    }
)


export default BottomTabNav;