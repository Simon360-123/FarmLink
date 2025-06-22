import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, View, TextInput, TouchableOpacity, ScrollView, Pressable,StyleSheet } from "react-native";
import authStyles from './styles';
import styles from "../styles";
import Button from '../../components/Button'
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState }from "react";
import * as ImagePicker from 'expo-image-picker'


const ProfileUpload = ()=>{

    const [image, setImage] = useState(null);
    const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

    return(
        <SafeAreaView style={styles.container}>
          <Pressable onPress={()=>{

         router.back()

          }} style={{marginLeft:'2%',marginVertical:10}}>

           <Ionicons name="arrow-back" size={24} color="black" />
           </Pressable>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={pickImage}>
             <Image resizeMode="contain" style={{width:180, height:180}} source={require('../../assets/images/Profile icon.png')}/>
            </TouchableOpacity>
        </View>

            <View>
                <Text style={{color:'#00000',fontWeight:'bold', fontSize:24,marginLeft:10, marginTop:4,textAlign:'center'}}>Upload Profile</Text>
            </View>
            <ScrollView>
            <View style={{alignSelf:'center', marginTop:30, marginVertical:20, width:'95%',marginBottom:20}}>
                <TextInput placeholder="Full Name" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}}/>
                <TextInput placeholder="Phone Number" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}} />
                <TextInput placeholder="Location" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}} />
            </View>

           <View style={{backgroundColor:'#047857' , borderRadius:20,height:50, width:'95%',alignSelf:'center',justifyContent:'center',marginBottom:100,marginTop:30}}>
            <TouchableOpacity onPress={()=>{
              router.navigate('/home')
            }}>
              <Text style={{alignSelf:'center',color:'#ffff', fontSize:24,fontWeight:'bold',textAlign:'center'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
                

                <View>
                  <Image resizeMode="contain" style={{width:160, height:3, alignSelf:'center',marginTop:10}} source={require('../../assets/images/Base.png')}/>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default ProfileUpload;