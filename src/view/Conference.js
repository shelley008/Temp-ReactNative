import React,{Component} from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'

import { Button,Icon as Icons} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as baseStyle from "../styles/base";



export default class Conference extends Component{

    render() {
        return (
          <View>
            <Text>会议列表111</Text>
            <Button title="Solid Button" />
            <Button title="Outline button" type="outline" />
            <Button  icon={ <Icon name="arrow-right" size={15} color="white"/>}  title="Button with i334400000" />
            <View style={{padding:30,flex:1}}>
                <Image source={{ uri: baseStyle.globalIcons.sorryImg}} style={{width: 70, height: 70}}/>
             </View>


            <View style={{padding:30,flex:1}}>
                <Icons name='g-translate'color='#00aced' size={80}/>
            </View>



          </View>
       )
    }
}



const msgStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10
    },
    noDatas: {
        justifyContent: 'center',
        paddingTop: 50,
        alignItems: 'center',
    },
    noDatasImg: {
        justifyContent: 'center',
        padding: 50,
        flex: 1
    },
    noDatasTxt: {
        textAlign: 'center',
        fontSize: 16
    }

});
