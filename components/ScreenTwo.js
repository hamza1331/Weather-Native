import React, { Component } from 'react'
import { View,Button } from 'react-native'
export default class ScreenTwo extends Component {
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
        title={`${this.props.navigation.state.params}`}
        onPress={() =>
          navigate('Home')
        }
        />
      </View>
    )
  }
}