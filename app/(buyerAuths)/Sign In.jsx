import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, View, TextInput, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from "react";
import styles from "../styles";
import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";



const SignIn = ()=>{

                    const [passwordShown, setPasswordShown] = useState(false);
                    const [email, setEmail] = useState('');
                    const [password, setPassword] = useState('');


                     const handleLogin = async () => {
    try {
      const response = await fetch('https://farmlink-api.onrender.com/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert('Login Failed', data.message || 'Please check your credentials.');
        return;
      }

      // Extract and store role + token
      const userRole = data?.user?.role;
      await AsyncStorage.setItem('userRole', userRole);
      await AsyncStorage.setItem('token', data.token); // if needed

      // Navigate based on role
      if (userRole === 'Farmer') {
        router.replace('/FarmerDashboard');
      } else if (userRole === 'Buyer') {
        router.replace('/BuyerDashboard');
      } else {
        Alert.alert('Error', 'Unknown user role.');
      }
    } catch (error) {
      Alert.alert('Network Error', 'Unable to connect. Please try again.');
    }
  };

     
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
                    <View>
                        <TextInput keyboardType="email-address" placeholder="Email:" 
                        style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}}/>
                    </View>

                    <View>
                        <TextInput placeholder="Password:" 
                        style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}} 
                        secureTextEntry={!passwordShown} />

                        <View style={{position:'absolute',right:20,bottom:30}}>
                            {
                                passwordShown ?<Pressable onPress={()=>{
                                    setPasswordShown(false)
                            
                                }}>

                                <Ionicons name="eye-off" size={20} color="#7B7B8B"/>
                                </Pressable>:   <Pressable onPress={()=>{
                                    setPasswordShown(true)
                                    
                                }}>

                                <Ionicons name="eye" size={20} color="#7B7B8B"/>
                                </Pressable>
                            }

                        </View>
                    </View>
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

                  <Button onPress={handleLogin}

                  text={'Login'}/>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 50 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                      <Text style={{ marginHorizontal: 10 }}>Or</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </View>
                        
                <View style={{flexDirection:'row', justifyContent:'space-between',marginVertical:100}}>

                    <TouchableOpacity>
                    <Image  resizeMode="contain" source={require('../../assets/images/google icon.png')} 
                    style={{width:24,height:24,marginLeft:140}}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                    <Image  resizeMode="contain" source={require('../../assets/images/facebook icon.png')} 
                    style={{width:24,height:24,marginRight:140}}/>
                    </TouchableOpacity>

                </View>

                <View>
                  <Image resizeMode="contain" style={{width:160, height:3, alignSelf:'center',marginTop:10}} 
                  source={require('../../assets/images/Base.png')}/>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn;