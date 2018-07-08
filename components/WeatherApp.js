import React, { Component } from 'react'
import { Text, View, TextInput,StyleSheet } from 'react-native'

export default class WeatherApp extends Component {
    constructor(props){
        super(props)
        this.state={
            zip:'',
            forecast:{						
                main:'Clouds',
                description:'few clouds',
                temp: 45.7
            }
        }
    }
    _handleTextChange(event)	{
    this.setState({	
            zip:event.nativeEvent.text
        });
        console.log(this.state.zip)
    }		
    render()	
    {				
        return(						
        <View style={styles.container}>	
        <Text style={styles.welcome}> Youinput	{this.state.zip}.</Text>
        <TextInput	style={styles.input}
        onChangeText={(text)=>{
            this.setState({
                zip:text
            })
        }}
        />
        </View>
    )
  }
}
const styles=StyleSheet.create({
    container:	{				flex:	1,				justifyContent:	'center',				alignItems:	'center',
    backgroundColor:	'#F5FCFF',		},		welcome:	{				fontSize:	20,				textAlign:	'center',				margin:	10,		},		input:	{				fontSize:	20,				borderWidth:	2,				height:	40				}
})