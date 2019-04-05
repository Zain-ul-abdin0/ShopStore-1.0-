import React  from 'react';
import {StyleSheet,Text,View,StatusBar,ListView,Image} from 'react-native'
import {Container ,Content,Header,Form,Input,Item,Button,Label,List,ListItem,Icon,Card, CardItem} from 'native-base'
import Home from './components/Home'
import Todo from './Tod'
import {createStackNavigator} from 'react-navigation'
export default class App extends React.Component {

  render() {
    return (
              <AppStack/>
          );
  }
}
const AppStack=createStackNavigator({
  Home:Home,
  Todo:Todo
})