import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native'
import * as baseStyle from "../../styles/base";


export default class Welcome extends React.Component {
    render(){
        return(
            <View style={styles.wrap}>
                <View style={styles.wrapBg}>
                    <Image source={require('../../images/start.png')} />
                </View>
                <View style={styles.goLogin}>
                     <Text>你好</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
     wrap:{
         backgroundColor:'#ccc',
         flex:1
     },
    wrapBg:{
         flex:1,
         position:'absolute',
         left:0,
         right:0,
         bottom:0,
         top:0,
         zIndex:1
    },
    goLogin:{
        zIndex: 2,
        height:60
    }
})