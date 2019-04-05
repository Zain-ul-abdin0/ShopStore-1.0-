import React  from 'react';
import {StyleSheet,Text,View,TextInput,ScrollView} from 'react-native'

const restaurants =[
  {name:'React Cafe',address:'123 Anywhere st'},
  {name:'Fncy Cafe',address:'799 Anywhere st'},
  {name:'Rearct Cafe',address:'123 Anywhere st'},
  {name:'bancy Cafe',address:'799 Anywhere st'},
  {name:'meact Cafe',address:'123 Anywhere st'},
  {name:'2ancy Cafe',address:'799 Anywhere st'},
  {name:'6eact Cafe',address:'123 Anywhere st'},
  {name:'Fa6ncy Cafe',address:'799 Anywhere st'},
  {name:'R8eact Cafe',address:'123 Anywhere st'},
  {name:'gwFacy Cafe',address:'799 Anywhere st'},
  {name:'45React Cafe',address:'123 Anywhere st'},
  {name:'5grancy Cafe',address:'799 Anywhere st'}, 
  {name:'45Reat Cafe',address:'123 Anywhere st'},
  {name:'5granc Cafe',address:'799 Anywhere st'}, 
  {name:'eact Cafe',address:'123 Anywhere st'},
  {name:'Fma6ncy Cafe',address:'799 Anywhere st'},
  {name:'5React Cafe',address:'123 Anywhere st'},
  {name:'grancy Cafe',address:'799 Anywhere st'}, 
  {name:'5Reat Cafe',address:'123 Anywhere st'},
  {name:'granc Cafe',address:'799 Anywhere st'}, 
  {name:'act Cafe',address:'123 Anywhere st'},
  {name:'ma6ncy Cafe',address:'799 Anywhere st'},

]

export default class App extends React.Component {

  
  render() {

  this.state ={
    search:null
  }
    return (
           <View style={styles.header}><Text style={{fontSize:30,textAlign:'center',padding:40,color:'blue'}}>Restaurant Review</Text>
           <TextInput style={styles.input}
          placeholder="Live Search"
          onChangeText={(text)=>this.setState({search:text})}
          value={this.state.search}
           />
           <ScrollView contentContainerStyle={{paddingTop:30}}>
           {
             restaurants.filter(place=>{ 

               return !this.state.search || place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1

             }).map((place,index)=>{
               return (
                 <View key={place.name} style={[{flexDirection:'row'},{backgroundColor: index%2==0 ? 'white':'#F3F3F7'}]}>
                   <Text style={{flex:1}}>{index+1}</Text>

                   <View style={{flex:8 ,flexDirection:'column'}}>
                   <Text>{place.name}</Text>
                   <Text>{place.address}</Text>
                   </View>
                   <Text style={{flex:1}}>Info</Text>

             
                 </View>
                
               )
             })
           }</ScrollView>          
           </View>
          );
  }
}

const styles=StyleSheet.create({

  header:{
         flex:1,flexDirection:'column'
  },
  input : {
  padding :10,
  paddingHorizontal: 20,
  fontSize:16,
  color:'#444',
  borderBottomWidth: 1,
  borderColor:'#ddd',
  backgroundColor:'#F5f5f5'
  }
})