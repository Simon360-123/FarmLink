import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, View, TextInput, TouchableOpacity, ScrollView, Pressable, AntDesign } from "react-native";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import React,{ useState } from "react";
import styles from "../styles";


const farmerSignUp = ()=>{

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => setIsChecked((prev) => !prev);


    return(
      <SafeAreaView style={styles.container}>
            
         <Pressable onPress={()=>{

         router.back()

          }} style={{marginLeft:'2%',marginVertical:10}}>

           <Ionicons name="arrow-back" size={24} color="black" />
           </Pressable>
            <View>
                <Text style={{fontFamily:'Signika-Bold', fontSize:24,fontWeight:'bold',marginLeft:10, marginTop:5}}>Sign Up</Text>
            </View>
        <ScrollView contentContainerStyle={{flexGrow:1}}>

          <View style={{alignSelf:'center',marginHorizontal:'10%', marginTop:30, width:'95%'}}>
            <TextInput  placeholder="Full Name:" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}}/>
            <TextInput placeholder="Phone No (+234):" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}} />
            <TextInput keyboardType="email-address" placeholder="Email:" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}} />
            <TextInput placeholder="Password:" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}} />
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
  {/* Checkbox - clickable */}
  <TouchableOpacity onPress={() => setIsChecked(prev => !prev)}>
    <Ionicons
      name={isChecked ? 'checkbox' : 'checkbox-outline'}
      size={24}
      color={isChecked ? '#047857' : 'black'}
    />
  </TouchableOpacity>

  {/* Text with static and clickable part */}
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
            <Image resizeMode="contain" style={{width:160, height:3, alignSelf:'center',marginTop:100}} source={require('../../assets/images/Base.png')}/>
          </View>

        </ScrollView>

      </SafeAreaView>
    )
}

export default farmerSignUp;