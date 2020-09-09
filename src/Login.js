import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image,AsyncStorage,
  Alert,StatusBar,
} from 'react-native';
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
      token:null,
      loading:false,
      UserData:null,
      NewUser:""
    }
  }
  onEmailChange = text => {
    this.setState({ email: text });
  };
  onPassowrdChange = text => {
    this.setState({ password: text });
  }
  Login = async () =>{
 this.props.navigation.navigate('Home')
  }
  render() {
    return (
        <ImageBackground style={{width:'100%',height:'100%'}} resizeMode='cover' source={require("./img/bgg.jpg")} blurRadius={0}>
         <StatusBar backgroundColor="#2a7c8a" barStyle="light-content" />
        {/* <Image style={{position:'absolute',top:100,alignSelf:"center",width:220,height:130,resizeMode:'contain',borderRadius:20}} source={require('./img/icon.jpg')}/> */}
      <View style={{width:320,alignSelf:"center",justifyContent:"center",alignItems:"center",marginTop:280}}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              value={this.state.email}
              onChangeText={this.onEmailChange}
              
              />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              value={this.state.password}
              onChangeText={this.onPassowrdChange}
              
              />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>

        <TouchableOpacity style={styles.btnForgotPassword}>
            <Text style={styles.btnText}>Forgot your password?</Text>
        </TouchableOpacity>

       
        </View>
        <TouchableOpacity style={{width:320,height:50,justifyContent:"center",backgroundColor:"#1aa79e",borderRadius:25,alignItems:"center",alignSelf:"center"}}
        onPress={this.Login}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignContent:"center",justifyContent:"center",alignSelf:"center",marginTop:20 }} onPress={() => this.props.navigation.navigate("Signup")}>
            <Text style={{color:"white",
    fontWeight:'bold',
    marginLeft:20,
    alignSelf:"center"}}>Register</Text>
        </TouchableOpacity>


        </ImageBackground> 
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#1aa79e',
  },
  inputContainer: {
    borderBottomColor: 'transparent',
    backgroundColor: 'white',
    borderRadius:30,
    borderBottomWidth: 1,
    justifyContent:"center",
    // width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,   
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    marginLeft:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "black",
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top:20
    // justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
    marginLeft:20,
    alignSelf:"center"
  }
}); 