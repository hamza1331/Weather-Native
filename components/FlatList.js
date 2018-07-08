import React, { Component } from 'react'
import { Text, View,FlatList,Image,Alert,Button,Modal } from 'react-native'
import Swipeout from 'react-native-swipeout'
import Courses from './Courses'
class FlatListItem extends Component{
  constructor(props){
    super(props)
    this.state={
      activeRowKey:null
    }
  }
  render(){
    const swipeSettings={
      autoClose:true,
      onClose:(swcId,rowId,direction)=>{
        if(this.state.activeRowKey!=null){
          this.setState({
            activeRowKey:null
          })
        }
      },
      onOpen:(swcId,rowId,direction)=>{
        this.setState({
          activeRowKey:this.props.item.ID
        })
      },
      right:[
        {
          onPress:()=>{
              Alert.alert(
                'Alert',
                'Are you sure want to delete?',
                [
                  {text:'No',onPress:()=>console.log('Action Canceled'),style:'cancel'},
                  {text:'Yes',onPress:()=>{
                    Courses.splice(this.props.index,1)
                  }}
                ],
                {cancelable:true}
              )
          },
          text:'Delete',type:'delete'
        }
      ],
      rowId:this.props.index,
      sectionID:1
    }
    return(
      <Swipeout {...swipeSettings}>
        <View style={{flex:1,
        flexDirection:'row',
        backgroundColor:'seagreen',
        paddingTop:20,
        borderBottomColor:'black',
        borderBottomWidth:1
      }}>
      {this.props.index%2===0?<Image source={require('./two.jpg')}
      style={{width:100,height:100,margin:5}}
      />:<Image source={require('./hd.jpg')}
      style={{width:100,height:100,margin:5}}
      />}
      <View style={{flex:1,flexDirection:'column'}}>
      <Text style={{color:'white',padding:10,fontSize:16}}>
          {this.props.item.title}
        </Text>
        <Text style={{color:'white',padding:10,fontSize:16}}>
          {this.props.item.subtitle}
        </Text>
      </View>
      </View>
      </Swipeout>
    )
  }
}
export default class FlatListComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      Courses:Courses,
      loading:false,
      visible:false
    }
  }
  render() {
    return (
      <View style={{flex:1,marginTop:25}}>
          <View>
          <Button title='Add' 
          onPress={()=>{
            // Alert.alert('Alert')
            this.setState({
              visible:true
            })
          }}/>
          </View>
          <FlatList
          data={this.state.Courses}
          renderItem={({item,index})=>{
            return (<FlatListItem key={item.ID} item={item} index={index} />)
          }}
          keyExtractor={(item)=>item.ID}
          >
          </FlatList>
          
        </View>
    )
  }
}