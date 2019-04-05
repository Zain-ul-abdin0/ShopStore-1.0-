import React  from 'react';
import {StyleSheet,Text,View,StatusBar,ListView,ViewPagerAndroid} from 'react-native'

export default class ViewPager extends React.Component {

  render() {
    return (
             <ViewPager
             style={{flex:1}}
             initialPage={0}
             >

             <View style={{backgroundColor:'green'}}>
                 <Text>Screen 1</Text>
             </View>

              
             <View style={{backgroundColor:'red'}}>
                 <Text>Screen 2</Text>
             </View>



             <View style={{backgroundColor:'yellow'}}>
                 <Text>Screen 3</Text>
             </View>


             </ViewPager>
          );
  }
}
const styles=StyleSheet.create({
    textStyle:{
        fontSize:20,
        fontWeight: '500',
        padding:20,
        color:'white',
        textAlign:'center'
    }
})