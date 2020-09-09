import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,ImageBackground,
  KeyboardAvoidingView,
  Alert,StatusBar,
} from 'react-native';
export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      phone:'',
      email: '',
      password: '',
    }
  }
  onNameChange = text => {
    this.setState({ name: text });
  };

  onEmailChange = text => {
    this.setState({ email: text });
  };
  onPassowrdChange = text => {
    this.setState({ password: text });
  }
  onPhoneChange = text => {
    this.setState({ phone: text });
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  Signup =()=>{
 
      this.props.navigation.navigate("Login")
  }

  render() {
    return (
        <ImageBackground style={{width:'100%',height:'100%'}} resizeMode='cover' source={require("./img/bgg.jpg")} blurRadius={0}>
         <StatusBar backgroundColor="#2a7c8a" barStyle="light-content" />
        {/* <Image style={{position:'absolute',top:20,alignSelf:"center",width:220,height:130,borderRadius:20,resizeMode:'contain'}} source={require("./img/icon.jpg")}/> */}
      <View style={{alignSelf:"center",marginTop:180}}>
        <KeyboardAvoidingView>
      <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Name"
            //   secureTextEntry={true}
              underlineColorAndroid='transparent'
              value={this.state.name}
              onChangeText={this.onNameChange}
              />
          <Image style={styles.inputIcon} source={require("./img/name.png")}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Phone Number"
            //   secureTextEntry={true}
              underlineColorAndroid='transparent'
              value={this.state.phone}
              onChangeText={this.onPhoneChange}
              
              />
          <Image style={styles.inputIcon} source={require("./img/phone.png")}/>
        </View>
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
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.btnForgotPassword} onPress={() => this.onClickListener('restore_password')}>
            <Text style={styles.btnText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer
        , styles.loginButton]} onPress={this.Signup}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        </View>


        <TouchableOpacity style={{flexDirection:"row",alignSelf:"center",marginTop:10}} onPress={() => this.onClickListener('register')}>
            <Text style={{color:"white"}}> If Your Already Register ?</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
            <Text style={{color:"red"}}> Click Here</Text>
            </TouchableOpacity>
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
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
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
    backgroundColor: "#1aa79e",

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
    fontWeight:'bold'
  }
}); 