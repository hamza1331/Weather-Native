import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class FlexContainer extends Component {
  render() {
    return (
<View style={{
        flex: 1
      }}>
        <View style={{flex:30,flexDirection:'row', backgroundColor: 'powderblue'}}>
        
        <View style={{width:50,height:50,margin:20, backgroundColor: 'blue'}} />
        <View style={{width:50,height:50, margin:20, backgroundColor: 'red'}} />
        </View>
        <View style={{flex:70, backgroundColor: 'skyblue'}}>
        <View style={{width:50,height:50, backgroundColor: 'red'}} />
        <View style={{width:50,height:50, backgroundColor: 'blue'}} />
        </View>
      </View>
    )
  }
}