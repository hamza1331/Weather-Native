import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class FixedContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        width:140,
        height:200,
        backgroundColor:'blue'
    }
})