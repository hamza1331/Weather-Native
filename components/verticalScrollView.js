import React, { Component } from 'react'
import { ScrollView, Image,Dimensions,View } from 'react-native'

export default class VerticalScrollView extends Component {
  render() {
      let screenWidth = Dimensions.get('window').width
      let screenHeight = Dimensions.get('window').height
    return (
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        >
        <Image
            source={require('./hd.jpg')}
            style={{width:screenWidth,height:screenHeight,marginTop:20}}
            >
            </Image>
        <Image
            source={require('./hd.jpg')}
            style={{width:screenWidth,height:screenHeight,marginTop:20}}
            >
            </Image>
        <Image
            source={require('./hd.jpg')}
            style={{width:screenWidth,height:screenHeight,marginTop:20}}
            >
            </Image>
        <Image
            source={require('./hd.jpg')}
            style={{width:screenWidth,height:screenHeight,marginTop:20}}
            >
            </Image>
        <Image
            source={require('./hd.jpg')}
            style={{width:screenWidth,height:screenHeight,marginTop:20}}
            >
            </Image>
            
        </ScrollView>
    )
  }
}