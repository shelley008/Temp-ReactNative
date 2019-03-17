import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import DeviceStorage from '../../config/deviceStorage'
import {doLoginRest} from "../../api/login";
import crypto from 'node-forge';
//import DeviceStorage from '../../config/deviceStorage';



export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            serveAddress:'',
            account:'',
            password:'',
            focus: false

        }
        this.deviceSN=''
        this.deviceType='Windows'
        this.domain='local'
        this.tempToken=''
    }

    updateState = (key, text) => {
        this.setState({[key]: text});
    };

    onFocus = () => {
        this.setState({
            focus: true
        });
    };

    onBlur = () => {
        this.setState({
            focus: false
        });
    };


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
        //let pwd = crypto.createHash('sha1').update(password, 'utf-8').digest('HEX')
        let pwd = crypto.md.sha1.create().update(password).digest().toHex()

        let params = {
            account:account,
            password:pwd,
            intranet: "false"
        }
        console.log('---param---')
        console.log(params)

        doLoginRest(params).then(res => {
            console.log(res.data)
           // DeviceStorage.save(userProfile,res.data.profile)
           // DeviceStorage.save(userToken,res.data.token)
            this.props.navigation.navigate('Conference')
        }).catch(err=>{
            console.log(err)
        })
    }


    render(){
        const {navigation} = this.props;
        const {account, password} = this.state;
        const id = navigation.getParam('id')
        const info = navigation.getParam('info')
        const name = navigation.getParam('name')


        return(
            <View>

                {/*<View>*/}
                    {/*<Input*/}
                        {/*placeholder='请输入服务器地址'*/}
                        {/*leftIcon={*/}
                            {/*<Icon*/}
                                {/*name='user'*/}
                                {/*size={24}*/}
                                {/*color='black'*/}
                            {/*/>*/}
                        {/*}*/}
                        {/*value = {account}*/}
                        {/*update={this.updateState}*/}
                    {/*/>*/}
                {/*</View>*/}
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
                        value = {account}
                        id="account"
                        //id="account" update={this.updateState}  value={account}
                       // onChangeText = { account => this.setState({account}) }
                        onChangeText={(text) => this.updateState('account', text)}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}


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
                        value = {password}
                        id="password"
                        //onChangeText = { password => this.setState({password})
                        //id="password" update={this.updateState}  value={password}
                        onChangeText={(text) => this.updateState('password', text)}
                    />
                </View>


                <TouchableHighlight style={{margin:20}} onPress={()=>{this._doLogin()}}>
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