import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, View, TextInput, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { useState } from "react";
import styles from "../styles";
import Button from "../../components/Button";


const farmerSignIn = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <Pressable onPress={()=>{

         router.back()

          }} style={{marginLeft:'2%',marginVertical:10}}>

           <Ionicons name="arrow-back" size={24} color="black" />
           </Pressable>
            <View>
                <Text style={{color:'#00000',fontWeight:'bold', fontSize:24,marginLeft:10}}>Sign in</Text>
            </View>
           <ScrollView>
            <View style={{alignSelf:'center',marginHorizontal:'10%', marginTop:30, marginVertical:20, width:'95%'}}>
                <TextInput keyboardType="email-address" placeholder="Email:" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}}/>
                <TextInput placeholder="Password:" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}} />
            </View>

               <View style={{justifyContent:'space-between',alignContent:'space-between',flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{
                        router.navigate('./Sign Up')
                    }}>
                        <Text style={{color:'#FF4242',marginRight:20,fontSize:16,marginLeft:10}}>Create account </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        router.navigate('./OTP')
                    }}>
                      <Text style={{color:'#050605',marginRight:10}}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:-60}}>

                  <Button onPress={()=>{

                  router.navigate('/home')

                 }} text={'Login'}/>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 50 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    <Text style={{ marginHorizontal: 10 }}>Or</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </View>
                       
            <View style={{flexDirection:'row', justifyContent:'space-between',marginVertical:100}}>
                <TouchableOpacity>
                <Image  resizeMode="contain" source={require('../../assets/images/google icon.png')} style={{width:24,height:24,marginLeft:140}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image  resizeMode="contain" source={require('../../assets/images/facebook icon.png')} style={{width:24,height:24,marginRight:140}}/>
                </TouchableOpacity>
            </View>
                <View>
                  <Image resizeMode="contain" style={{width:160, height:3, alignSelf:'center',marginTop:10}} source={require('../../assets/images/Base.png')}/>
                </View>
                </ScrollView>
        </SafeAreaView>
    )
}

export default  farmerSignIn;