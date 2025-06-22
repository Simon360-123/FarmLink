import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, View, TextInput, TouchableOpacity, ScrollView, Pressable,StyleSheet } from "react-native";
import authStyles from './styles';
import styles from "../styles";
import Button from '../../components/Button'
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { useState } from "react";


const resetPassword = ()=>{
     const [newPasswordShown, setNewPasswordShown] = useState(false);
     const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
         
    return(
        <SafeAreaView style={styles.container}>
            <Pressable onPress={()=>{

         router.back()

          }} style={{marginLeft:'2%',marginVertical:10}}>

           <Ionicons name="arrow-back" size={24} color="black" />
           </Pressable>
            <View>
                <Text style={{color:'#00000',fontWeight:'bold', fontSize:24,marginLeft:10}}>Reset Password:</Text>
            </View>

            <View style={{alignSelf:'center',marginHorizontal:'10%', marginTop:30, marginVertical:20, width:'95%'}}>

                <View>
                    <TextInput placeholder="New password" 
                    style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}}
                    secureTextEntry={!newPasswordShown}/>

                    <View style={{position:'absolute',right:20,bottom:30}}>
                            {
                                newPasswordShown ?<Pressable onPress={()=>{
                                    setNewPasswordShown(false)
                            
                                }}>

                                <Ionicons name="eye-off" size={20} color="#7B7B8B"/>
                                </Pressable>:   <Pressable onPress={()=>{
                                    setNewPasswordShown(true)
                                    
                                }}>

                                <Ionicons name="eye" size={20} color="#7B7B8B"/>
                                </Pressable>
                            }

                        </View>
                </View>

                <View>
                    <TextInput placeholder="Confirm Password" 
                    style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}} 
                    secureTextEntry={!confirmPasswordShown}/>


                    <View style={{position:'absolute',right:20,bottom:30}}>
                            {
                                confirmPasswordShown ?<Pressable onPress={()=>{
                                    setConfirmPasswordShown(false)
                            
                                }}>

                                <Ionicons name="eye-off" size={20} color="#7B7B8B"/>
                                </Pressable>:   <Pressable onPress={()=>{
                                    setConfirmPasswordShown(true)
                                    
                                }}>

                                <Ionicons name="eye" size={20} color="#7B7B8B"/>
                                </Pressable>
                            }

                        </View>
                </View>

            </View>

      


                <View>

                  <Button onPress={()=>{

                  router.navigate('/Sign In ')

                 }} text={'Next'}/>

                </View>

                <View>
                  <Image resizeMode="contain" style={{width:160, height:3, alignSelf:'center',marginTop:250}} source={require('../../assets/images/Base.png')}/>
                </View>

        </SafeAreaView>
    )
}

export default resetPassword;