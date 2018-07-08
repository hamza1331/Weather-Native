import React from "react";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image } from "react-native";
import Expo from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
        <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem header>
                <Text>NativeBase Practice</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('./two.jpg')} style={{height: 150, width: 200, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
                <Right>
                    <Text>
                        Click
                    </Text>
                </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}