import React  from 'react';
import {AppRegistry,Image,Text,TextInput,ScrollView,Dimensions} from 'react-native'
export default class VerticalScrollView extends React.Component {

  render() {
      let screenWidth = Dimensions.get('window').width;
    return (
        <ScrollView>
            <Image 
            source={require('../pics/za.jpg')}
            style={{width:screenWidth,height:screenWidth* 714/1440}}
            >
             </Image>
             <Text
             style={{
                 padding:15,
                 color:'white',
                 textAlign:'center',
                 backgroundColor:'green'
             }}
             >
            This is a text
             </Text>



             <Image 
            source={require('../pics/za.jpg')}
            style={{width:screenWidth,height:screenWidth* 714/1440}}
            >
             </Image>
             <Text
             style={{
                 padding:15,
                 color:'white',
                 textAlign:'center',
                 backgroundColor:'green'
             }}
             >
            This is a text
             </Text>




             <Image 
            source={require('../pics/za.jpg')}
            style={{width:screenWidth,height:screenWidth* 714/1440}}
            >
             </Image>
             <Text
             style={{
                 padding:15,
                 color:'white',
                 textAlign:'center',
                 backgroundColor:'green'
             }}
             >
            This is a text
             </Text>




             <Image 
            source={require('../pics/za.jpg')}
            style={{width:screenWidth,height:screenWidth* 714/1440}}
            >
             </Image>
             <Text
             style={{
                 padding:15,
                 color:'white',
                 textAlign:'center',
                 backgroundColor:'green'
             }}
             >
            This is a text
             </Text>
        </ScrollView>
    );
  }
}