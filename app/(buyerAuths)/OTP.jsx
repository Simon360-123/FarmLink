import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, View, TextInput, TouchableOpacity, ScrollView, Pressable,StyleSheet } from "react-native";
//import styles from "../styles.js";
import authStyles from './styles';
import styles from "../styles";
import Button from '../../components/Button'
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from "react";
//import COLORS from "../../constants/mycolors";


const OTP = ()=>{

    const [input, setInput] = useState('');
    const minLength = 6;
    const maxLength = 6;

    return(
        <SafeAreaView style={styles.container}>
            <Pressable onPress={()=>{

         router.back()

          }} style={{marginLeft:'2%',marginVertical:10}}>

           <Ionicons name="arrow-back" size={24} color="black" />
           </Pressable>
            <View>
                <Text style={{color:'#00000',fontWeight:'bold', fontSize:24,marginLeft:10}}>OTP Verification</Text>
            </View>
            <View style={{marginLeft:10,marginTop:10}}>
                <Text>Enter the 6-digit code sent to your Email</Text>
            </View>

            <View style={{alignSelf:'center',marginHorizontal:'10%', marginTop:20, marginVertical:10, width:'95%'}}>
                <TextInput value= {input}  onChangeText={(text) => {
          if (text.length <= maxLength) setInput(text);
        }}

                placeholder="Input OTP"  textAlign="center"
        maxLength={maxLength}
 style={{backgroundColor:'#FBE9E7', height:65, borderRadius:8,paddingLeft:12}} keyboardType="numeric"/>
            </View>
            <View style={{marginLeft:10}}>
                <Text>Don't receive OTP? <Text style={{color:'red'}}>Resend OTP</Text></Text>
            </View>
            <TouchableOpacity
        disabled={input.length !== minLength}
        onPress={() => router.navigate('./Reset Password')}
        style={{
          height: 50,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: input.length === minLength ? '#047857' : '#81BBAB',
          marginHorizontal:'2%',
          marginTop:200
        }}
      >
        <Text style={{ color: '#fff', fontSize: 24}}>Verify</Text>
        </TouchableOpacity>

                {/* <View>

                  <Button onPress={()=>{

                  router.navigate('/Reset Password')

                 }} text={'Next'}/>

                </View> */}

                <View>
                  <Image resizeMode="contain" style={{width:160, height:3, alignSelf:'center',marginTop:280}} source={require('../../assets/images/Base.png')}/>
                </View>

        </SafeAreaView>
    )
}

export default OTP;