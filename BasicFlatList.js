import React  from 'react';
import {StyleSheet,Text,View,StatusBar,ListView,FlatList,Alert} from 'react-native'
import {Container ,Content,Header,Form,Input,Item,Button,Label,List,ListItem,Icon, Right} from 'native-base'



class FlatListItem extends React.Component{
  render(){
    return (
      <View>
      <Text>
        {this.props.state.todo}
      </Text>
      </View>
    );
  }
}




export default class BasicFlatList extends React.Component {

  constructor(props){
    super(props);
    this.state=({
      todo:'',
    })
  }
  render() {
    return (
     <Container>
       <Header style={{backgroundColor:'#FF2156'}}>
       <Right>
       <View  style={{marginTop:20}}>
            <Button transparent onPress={()=>{Alert.alert(this.state.todo)}}>
              <Icon name='add' />
            </Button>
            </View>
          </Right>
       </Header>
       <Content >
       <FlatList 
       data ={this.state.todo}
       renderItem={({todo,index})=>
       {
         return (
           <FlatListItem todo={this.state.todo}> 
           
           </FlatListItem>
         );
       } }
       >

       </FlatList>
       </Content>
       <View style={{flex:1,justifyContent:'flex-end'}}>
       <Form >
        <Item floatingLabel >
        <Label>Enter Your Todo</Label>
        <Input
             onChangeText={(todo)=>this.setState({todo})}
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

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

