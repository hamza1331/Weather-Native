import React from 'react';
import { StyleSheet, Text, View, TextInput,Button,Image,Dimensions } from 'react-native';

import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

import { API_KEY } from './utils/WeatherAPIKey';

import Weather from './components/Weather';

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null,
    city:'',
    country:''
  };


  fetchWeahter() {
    if(this.state.city&&this.state.country){
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}
        ,${this.state.country}&appid=${API_KEY}&units=metric`
      )
        .then(res => res.json())
        .then(json => {
          // console.log(json);
          this.setState({
            temperature: json.main.temp,
            weatherCondition: json.weather[0].main,
            isLoading: false
          });
        });
    }
  }

  render() {
    const { isLoading, weatherCondition, temperature } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
          <Text style={styles.heading}>WEATHER APP</Text>
          <TextInput
          autoFocus={true}
          placeholder="Enter City"
          style={styles.textInput}
          underlineColorAndroid='transparent'
          onChangeText={text=>{
            this.setState({
              city:text
            })
          }}
          />
          <TextInput
          placeholder="Enter Country"
          style={styles.textInput}
          underlineColorAndroid='transparent'
          onChangeText={text=>{
            this.setState({
              country:text
            })
          }}
          />
            <Button color={'rgb(180, 154, 35)'} title='Update Weather'
            onPress={()=>this.fetchWeahter()}
            />
          </View>
        ) : (
          <Weather weather={weatherCondition} temperature={temperature} />
        )}
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  },
  heading:{
    fontSize:45,
    color:'rgb(218, 205, 33)',
    fontWeight:'bold',
    margin:25,
    fontStyle:'italic'
  },
  textInput:{
    width:300,
    color:'rgb(206, 176, 41)',
    fontSize:18,
    marginBottom:10,
    borderColor:'rgb(180, 154, 35)',
    borderWidth:1,
    borderRadius:15,
    textAlign:'center',
    fontWeight:'bold',
    fontStyle:'italic'
  }
});
