import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, View, TextInput, TouchableOpacity, ScrollView, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import React, { useState } from "react";


const Role = ()=>{
   
    const [selected, setSelected] = useState('');

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{fontSize:36, fontWeight:'bold',textAlign:'center',marginTop:200}}>Select Role</Text>
                <View style={{flexDirection:'row', alignSelf:'center'}}>
                  <Text style={{textAlign:'center',color:'#050605', fontSize:16,fontWeight:'light'}}>How will you be interacting with our app</Text>
                  <Image resizeMode="contain" style={{width:30,height:30}} source={require('../../assets/images/pepicons-pop_question.png')}/>
                </View>

                <View style={styles.container}>

                  {['Farmer', 'Buyer'].map((type) => (

                    <TouchableOpacity

                     key={type} style={[styles.button, selected === type && styles.selectedButton]}

                      onPress={() => setSelected(type)}>

                       <Text style={[styles.text,selected === type && styles.selectedText]}>{type}</Text>

                    </TouchableOpacity>
                  ))}

                </View>

                <View style={{width:'105%',alignSelf:'center'}}>

                  <TouchableOpacity

                      onPress={()=>{
                        
                        if(selected)

                      router.push({pathname:'/Sign Up', params:{Role:selected}});

                    }}
                    disabled={!selected}
                    style={[styles.continueButon,
                      {backgroundColor:selected ? '#047857': '#81BBAB'},
                    ]} 
                    >
                    <Text style={styles.continueText}>Continue</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <Image resizeMode="contain" style={{width:160, height:3, alignSelf:'center',marginTop:100}} source={require('../../assets/images/Base.png')}/>
                </View>

               
            </View>
        </SafeAreaView>
    )
}

export default Role;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 4,
    width:149.07,
    height:50,
    alignItems:'center'
    
  },
  selectedButton: {
    backgroundColor:'#047857',
    borderColor: '#047857',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize:24
  },
  selectedText: {
    color: 'white',
  },

  continueText:{
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },

  continueButon:{
    height:50,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:200
  }
});
