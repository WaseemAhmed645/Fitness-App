import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  ImageBackground,
  Animated,
  TextInput,AsyncStorage,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  View
} from "react-native";
import * as Animatable from "react-native-animatable";

const SCREEN_HEIGHT = Dimensions.get("window").height;
export default class Splash extends Component {
  constructor(props){
    super(props);
    this.state={
      token:null
    }
  }
  static navigationOptions = {
    header: null
  };
 async componentWillMount() {

    setTimeout(() => {
      this.props.navigation.navigate("Front");
    }, 2000);
  
  }

  render() {
    return (
        <ImageBackground style={{width:'100%',height:'100%'}} resizeMode='cover' source={require("./img/bgg.jpg")} blurRadius={0}>
        {/* <Text style={{fontSize:24,fontWeight:'bold',color:'white',alignSelf:'center',marginTop:30}}>Fitness App</Text> */}
          <Animatable.View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            animation="bounceIn"
            iterationCount={2}
          >
            <View
              style={{
                height: 40,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center"
              }}
            >
              <Image
                source={require("./img/icon.jpg")}
                style={{ width: 250, height: 150,resizeMode:"contain",borderRadius:50 }}
              />
            </View>
          </Animatable.View>
          </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }
});