import React, { Component } from 'react'
import { Text, View,Image,ScrollView,ImageBackground,TouchableOpacity} from 'react-native'

export class Home extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{width:'100%',height:50,backgroundColor:'#1aa79e',flexDirection:'row'}}>
                <Image source={require('./img/drawer.png')} style={{width:30,height:30,marginLeft:10,marginTop:10}} />
                <Image source={require('./img/srch.png')} style={{position:'absolute',right:10,width:30,height:30,marginLeft:10,marginTop:10}} />
                </View>
<ScrollView>
<View style={{width:'90%',height:200,backgroundColor:'white',alignSelf:'center',elevation:2,marginTop:10,marginBottom:2}}>
<ImageBackground source={require('./img/1.jpeg')} style={{width:'100%',height:'90%'}} ></ImageBackground>
<Text style={{marginLeft:10,bottom:10}}>Get Oriented & Exercise Ready</Text>
<TouchableOpacity style={{width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center',backgroundColor:'#1aa79e',position:'absolute',bottom:15,right:10}}>
    <Image source={require('./img/hat.png')} style={{width:15,height:15,resizeMode:'cover'}} />
</TouchableOpacity>
</View>

<View style={{width:'90%',height:200,backgroundColor:'white',alignSelf:'center',elevation:2,marginTop:10,marginBottom:2}}>
<ImageBackground source={require('./img/2.jpg')} style={{width:'100%',height:'90%'}} ></ImageBackground>
<Text style={{marginLeft:10,bottom:10}}>Get Oriented & Exercise Right</Text>
<TouchableOpacity style={{width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center',backgroundColor:'#1aa79e',position:'absolute',bottom:15,right:10}}>
    <Image source={require('./img/hat.png')} style={{width:15,height:15,resizeMode:'cover'}} />
</TouchableOpacity>
</View>
<View style={{width:'90%',height:200,backgroundColor:'white',alignSelf:'center',elevation:2,marginTop:10,marginBottom:2}}>
<ImageBackground source={require('./img/3.jpg')} style={{width:'100%',height:'90%'}} ></ImageBackground>
<Text style={{marginLeft:10,bottom:10}}>Get Ready & Exercise Daily</Text>
<TouchableOpacity style={{width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center',backgroundColor:'#1aa79e',position:'absolute',bottom:15,right:10}}>
    <Image source={require('./img/hat.png')} style={{width:15,height:15,resizeMode:'cover'}} />
</TouchableOpacity>
</View>
<View style={{width:'90%',height:200,backgroundColor:'white',alignSelf:'center',elevation:2,marginTop:10,marginBottom:2}}>
<ImageBackground source={require('./img/fit.jpg')} style={{width:'100%',height:'90%'}} ></ImageBackground>
<Text style={{marginLeft:10,bottom:10}}>Get Oriented & Exercise Ready</Text>
<TouchableOpacity style={{width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center',backgroundColor:'#1aa79e',position:'absolute',bottom:15,right:10}}>
    <Image source={require('./img/hat.png')} style={{width:15,height:15,resizeMode:'cover'}} />
</TouchableOpacity>
</View>

</ScrollView>
               
            </View>
        )
    }
}

export default Home
