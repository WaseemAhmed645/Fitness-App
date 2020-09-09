import React, { Component } from 'react'
import { Text, View,ImageBackground,TouchableOpacity } from 'react-native'

export class Front extends Component {
    render() {
        return (
            <View style={{flex:1}}>
            <ImageBackground style={{width:'100%',height:'100%'}} source={require("./img/bgg.jpg")}>
            <TouchableOpacity style={{width:100,height:30,backgroundColor:'#1aa79e',right:10,position:'absolute',top:10,borderRadius:5,justifyContent:'center',alignItems:'center'}}
            onPress={
                ()=>this.props.navigation.navigate("Login")
            }
            >
                <Text style={{color:'white'}}>Skip</Text>
            </TouchableOpacity>

            <View style={{position:'absolute',bottom :100,alignSelf:'center'}}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>EXERCISE RIGHT! EXERCISE FOR FUTURE</Text>
            </View>
            </ImageBackground>
            </View>
        )
    }
}

export default Front
