import React, { Component } from 'react'
import Expo from 'expo'
import { View,Button,ScrollView,Image,CameraRoll,Dimensions } from 'react-native'

export default class AccessCamera extends Component {
    constructor(props){
        super(props)
        this.state={
            photos:[]
        }
    }

    _handleButtonPress = () => {
        console.log('inside func')
        this.getImagesAsync()
        };
        async  getImagesAsync() {
            const { CAMERA_ROLL, Permissions } = Expo;
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status === 'granted') {
              return CameraRoll.getPhotos({
                first: 20,
                assetType: 'Photos',
              }).then(r => {
                console.log(r)
              this.setState({ photos: r.edges });
            })
            .catch((err) => {
               //Error Loading Images
               console.log(err)
            });
            } else {
              throw new Error('Location permission not granted');
            }
          }
     render() {
      return (
        <View style={{marginTop:25,height:Dimensions.get('screen').height}}>
          <Button title="Load Images" onPress={this._handleButtonPress} />
          <ScrollView>
            {this.state.photos.map((p, i) => {
            return (
              <View key={i} style={{margin:5}}>
                 <Image
                key={i}
                style={{
                  width: Dimensions.get('screen').width,
                  height: 400,
                }}
                source={{ uri: p.node.image.uri }}
              />
              </View>
            );
          })}
          </ScrollView>
        </View>
      );
     };
     }