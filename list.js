import React  from 'react';
import {StyleSheet,Text,View,StatusBar,ListView,Image,FlatList,Alert,DatePickerAndroid} from 'react-native'
import {Container ,Content,Header,Form,Input,Item,Button,Label,List,ListItem,Icon, Right} from 'native-base'
import FlatListData from './components/Data'
export default class App extends React.Component {

  constructor(props){
    super(props);


    this.state={
          
    }
  }
  show(){
 FlatListData.push["xs","3223","3432dsa"]
  }
  render() {
    return (
          <Container>
             <Header style={{backgroundColor:'#FF2156'}}>
       <Right>
       <View  style={{marginTop:20}}>
            <Button transparent onPress={()=>{this.show()}}>
              <Icon name='add' />
            </Button>
            </View>
          </Right>
       </Header>
     
     
            <FlatList
          data={FlatListData}
          
          renderItem={({item,index}) => 
          <View style={{flex:1}}>
          
          <Text style={{color:'green',padding:10,fontSize:16}}>{item.key}</Text>
          
          <Text style={{color:'green',padding:10,fontSize:16}}>{item.name}</Text>
          <Text style={{color:'green',padding:10,fontSize:16}}>{item.age}</Text>

          <Text style={{color:'green',padding:10,fontSize:16}}>{item.age}</Text>
          
          <Text style={{color:'green',padding:10,fontSize:16}}>{item.key}</Text>
          
          <Text style={{color:'green',padding:10,fontSize:16}}>{item.name}</Text>
          <Text style={{color:'green',padding:10,fontSize:16}}>{item.age}</Text>

          <Text style={{color:'green',padding:10,fontSize:16}}>{item.age}</Text>
          

          </View>
          
          }
        />
           <View style={{flex:1,justifyContent:'flex-end'}}>
    
    
    
       <Form >
        <Item floatingLabel >
        <Label>Enter Your Todo</Label>
        <Input
             onChangeText={(data)=>this.setState({data})}
             autoCorrect={false}
             autoCapitalize="none"
             />
        </Item>
       </Form>
       </View>
          </Container>   
          );
  }
}