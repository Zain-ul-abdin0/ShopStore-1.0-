import React  from 'react';
import {AppRegistry,Image,Text,TextInput,ScrollView,Dimensions,View} from 'react-native'
export default class HorizontalScrollView extends React.Component {

  render() {
      let screenWidth = Dimensions.get('window').width;
      let screenHeight = Dimensions.get('window').height;

    return (
        <ScrollView
        horizontal = {true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        >
        <View
        style={{
            backgroundColor:'#5f9ea0',
            flex:1,
            marginTop:20,
            width:screenWidth,
            justifyContent:'center',
            alignItems:'center'
        }}
        
        >
        <Text
        style={{
            fontSize:20,
            padding:15,
            color:'white',
            textAlign:'center',
            
        }}
        >Screen 1</Text>
        
        </View>

        <View>

        <View
        style={{
            backgroundColor:'#5f9',
            flex:1,
            marginTop:20,
            width:screenWidth,
            justifyContent:'center',
            alignItems:'center'
        }}
        
        >
        <Text
        style={{
            fontSize:20,
            padding:15,
            color:'white',
            textAlign:'center',
            
        }}
        >Screen 2</Text>
        
        </View>

        </View>
        
        </ScrollView>
    );
  }
}