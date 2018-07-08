import React, { Component } from 'react'
import { Text, View,SectionList,Dimensions } from 'react-native'
import secListData from './secListData'

class SecListIten extends Component{
  render(){
      return(
          <View
          style={{
              flex:1,
              flexDirection:'column',
              backgroundColor:'rgb(98,197,184)'
          }}
          >
          <Text
          style={{
              fontSize:16,
              fontWeight:'bold',
              marginLeft:20,
              marginRight:10,
              backgroundColor:'rgb(173,252,250)'
          }}
          >
          {this.props.item.name}
          </Text>
          <Text
          style={{
              fontSize:16,
              marginLeft:20,
              marginRight:10,
              backgroundColor:'rgb(173,252,250)'
          }}
          >
          {this.props.item.description}
          </Text>
          </View>
      )
  }
}
class SectionHeader extends Component{
    render(){
        return(
            <View
            style={{
                flex:1,
                backgroundColor:'rgb(77,120,140)'
            }}
            >
            <Text style={{
                fontSize:16,
                fontWeight:'bold',
                color:'white',
                margin:20
            }}>
                {this.props.section.title}
            </Text>
            </View>
        )
    }
}
export default class SecList extends Component {
  render() {
    return (
      <View style={{flex:1,marginTop:25,height:Dimensions.get('screen').height,backgroundColor:'aqua'}}>
      <SectionList
      sections={secListData}
      renderSectionHeader={({section})=>{
          return(
              <SectionHeader section={section}/>
          )
      }}
      keyExtractor={(item)=>item.name}
      renderItem={({item,index})=>{
        return(
            <SecListIten item={item} index={index}>

            </SecListIten>
        )
      }}
      >

      </SectionList>
      </View>
    )
  }
}