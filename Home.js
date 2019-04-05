import React  from 'react';
import {StyleSheet,Text,View,StatusBar,ListView,Image} from 'react-native'
import {Container ,Content,Header,Form,Input,Item,Button,Label,List,ListItem,Icon} from 'native-base'
import Todo from '../Tod'
import createStackNavigator from 'react-navigation'
export default class Homee extends React.Component {

  render() {
    return (
          <View style={{flex:1,alignItems:'center'}}>
          <Image source={require('../pics/home.png')} style={{height:300,marginTop:100,width:200}}>
          </Image>
           <View style={{flex:1,alignItems:'center'}}>
          <Button style={{backgroundColor:'#5DE61A',width :150,marginTop:20}}><Text style={{color:'#fff',fontWeight:'500',paddingLeft:40}}
          onPress={()=>this.props.navigation.navigate('Todo')}
          >Get Started</Text></Button>
          </View>
          </View>      
          );
  }
}