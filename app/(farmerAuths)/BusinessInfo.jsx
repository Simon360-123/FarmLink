import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, View, TextInput, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from "react";
import styles from "../styles";


const farmInfo = ()=>{

    const [isChecked, setIsChecked] = useState(false);
  
    const toggleCheckbox = () => setIsChecked((prev) => !prev);
  
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
              <Pressable onPress={()=>{

         router.back()

          }} style={{marginLeft:'2%',marginVertical:10}}>

           <Ionicons name="arrow-back" size={24} color="black" />
           </Pressable>
            <View>
                <Text style={{fontFamily:'Signika-Bold', fontSize:24,fontWeight:'bold',marginLeft:10, marginTop:5}}>Business Information</Text>
            </View>

            <View style={{alignSelf:'center',marginHorizontal:'10%', marginTop:30, width:'95%'}}>
             <TextInput placeholder="Name:" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}}/>
             <TextInput placeholder="Business Type:" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}} />
             <TextInput placeholder="Location:" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}} />
             <TextInput placeholder="Product interested in:" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'center',
                marginVertical: 20,
                width: '90%',
              }}
            >
            
              <TouchableOpacity onPress={() => setIsChecked(prev => !prev)}>
                <Ionicons
                  name={isChecked ? 'checkbox' : 'checkbox-outline'}
                  size={24}
                  color={isChecked ? '#047857' : 'black'}
                />
              </TouchableOpacity>

            <Text style={{ color: '#050605', fontSize: 12, fontWeight: '300', marginLeft: 10 }}>
              By clicking this, you accept the{' '}
              <Text
                style={{ color: '#FF4242' }}
                onPress={() => {
                  router.navigate('./T&C')
                }}
              >
                terms and conditions
              </Text>
            </Text>
          </View>


            <TouchableOpacity
                onPress={()=>{

                if(isChecked) {
                    router.navigate('/ProfileUpload');
                }
              }} 
              disabled={!isChecked}
              style={{
                backgroundColor:isChecked ? '#047857' : '#81BBAB',
                paddingVertical: 15,
                borderRadius: 20,
                alignItems:'center',
                justifyContent:'center',
                width:'95%',
                alignSelf:'center',
                marginTop:60
              }}
              >
              <Text style={{color:'white', fontSize:16,fontWeight:'bold'}}>Next</Text>
            </TouchableOpacity>

            <View>
              <Image resizeMode="contain" style={{width:160, height:3, alignSelf:'center',marginTop:50}} source={require('../../assets/images/Base.png')}/>
            </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default farmInfo;