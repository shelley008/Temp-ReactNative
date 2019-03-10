import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions,TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import DeviceStorage from '../../config/deviceStorage'


export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            serveAddress:'',
            account:'',
            password:'',

        }
        this.deviceSN=''
        this.deviceType='Windows'
        this.domain='local'
        this.tempToken=''
    }


    _doLogin(){
        const {account,password} = this.state
        if(!account){
            console.log('---请输入账号')
            return
        }
        if(!password){
            console.log('----请输入密码')
            return
        }
        let params = {
            account:account,
            password:password,
            deviceSN:this.deviceSN,
            deviceType:this.deviceType,
            domain:this.domain,
            tempToken:this.tempToken
        }
        console.log('---param---')
        console.log(params)
    }



    render(){
        const {navigation} = this.props;
        const id = navigation.getParam('id')
        const info = navigation.getParam('info')
        const name = navigation.getParam('name')


        return(
            <View>

                <View>
                    <Input
                        placeholder='请输入服务器地址'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                        value = {this.state.userName}
                        onChangeText = { userName => this.setState({userName}) }
                    />
                </View>
                <View>
                    <Input
                        placeholder='请输入账号'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                        value = {this.state.account}
                        onChangeText = { account => this.setState({account}) }
                    />
                </View>
                <View>
                    <Input
                        placeholder='请输入密码'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                        value = {this.state.password}
                        onChangeText = { password => this.setState({password}) }
                    />
                </View>


                <TouchableHighlight style={{margin:20}} onPress={this._doLogin()}>
                    <Text style={{backgroundColor:'blue',padding:10,fontSize:25}}>登录</Text>
                </TouchableHighlight>



                <TouchableHighlight style={{margin:20}} onPress={()=>{
                    this.props.navigation.navigate('SetPassword')
                }}>
                    <Text style={{backgroundColor:'#ccc',padding:10,fontSize:25}}>找回密码</Text>
                </TouchableHighlight>

                <TouchableHighlight style={{margin:20}} onPress={()=>{
                    this.props.navigation.navigate('Home')
                }}>
                    <Text style={{backgroundColor:'blue',padding:10,fontSize:25}}>进入首页</Text>
                </TouchableHighlight>
            </View>
        )
    }
}