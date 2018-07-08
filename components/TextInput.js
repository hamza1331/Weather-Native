import React, { Component } from 'react'
import { TextInput,StyleSheet,Text,Keyboard,ImageBackground } from 'react-native'
import { Container,Button } from "native-base";
export default class TextInputExample extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            pw:'',
            KeyboardText:''
        }
    }
    componentWillMount(){
        this.KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow',()=>{
            this.setState({
                KeyboardText:'keyboard shown'
            })
        })
        this.KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide',()=>{
            this.setState({
                KeyboardText:'keyboard hidden'
            })
        })
        this.setState({
            email:'',pw:''
        })
    }
    componentWillUnmount(){
        this.KeyboardDidShowListener.remove()
        this.KeyboardDidHideListener.remove()
    }
    render() {
        const { navigate } = this.props.navigation;
    return (
        <Container style={{padding:20}}>
            <TextInput style={styles.TextInput} 
            keyboardType='email-address'
            autoFocus={true}
            placeholder='Enter Email Address'
            returnKeyType="done"
            onChangeText={text=>{
                this.setState({
                    email:text
                })
            }}
            value={this.state.email}
            underlineColorAndroid='transparent'
            />
            <Text>{this.state.KeyboardText}</Text>
            <TextInput style={styles.TextInput}
            placeholder='Enter Password'
            onChangeText={text=>{
                this.setState({
                    pw:text
                })
            }}
            value={this.state.pw}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
            />
            <Button info rounded full small onPress={()=>{
                navigate('ScreenTwo',this.state.email.replace('.com',''))
            }}>
                <Text style={{fontSize:18}}>
                    Submit
                </Text>
            </Button>
        </Container>
    )
  }
}
const styles=StyleSheet.create({
    TextInput:{
        height:25,
        margin:10,
        padding:5,
        borderColor:'gray',
        borderWidth:1
    }
})