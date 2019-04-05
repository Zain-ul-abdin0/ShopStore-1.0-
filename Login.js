import React  from 'react';
import {StyleSheet,Text,View,Alert,Image} from 'react-native'
import {Container ,Content,Header,Form,Input,Item,Button,Label,} from 'native-base'
import {createStackNavigator} from 'react-navigation'

export default class Login extends React.Component {

  render() {
    return (
                <Image source = { require ('./pics/home.png')}></Image>
        );
  }
}


const styles=StyleSheet.create({
container :{
  flex:1,
   backgroundColor:'#fff',
   justifyContent :'center',
   padding:10 
},


});