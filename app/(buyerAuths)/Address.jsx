import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, View, TextInput, TouchableOpacity, ScrollView, Pressable,StyleSheet, FlatList,Modal} from "react-native";
import authStyles from './styles';
import styles from "../styles";
import Button from '../../components/Button'
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';



const stateLgaData = {
  ABIA: ['Aba North', 'Umuahia North', 'Isiala Ngwa'],
  BENUE: ['Makurdi', 'Gboko', 'Otukpo'],
  KADUNA: ['Zaria', 'Kafanchan', 'Kaduna North'],
  FCT: ['Gwagwalada', 'Kuje', 'Abaji'],
  LAGOS: ['Ikeja', 'Surulere', 'Epe'],
  RIVERS: ['Port Harcourt', 'Obio-Akpor', 'Okrika'],
  TARABA: ['Jalingo', 'Wukari', 'Bali'],
};


const Address = ()=>{

    const [selectedState, setSelectedState] = useState('');
    const [selectedLga, setSelectedLga] = useState('');


    const [showStateModal, setShowStateModal] = useState(false);
    const [showLgaModal, setShowLgaModal] = useState(false);


     const handleStateSelect = (state) => {
    setSelectedState(state);
    setSelectedLga('');
    setShowStateModal(false);
  };

  const handleLgaSelect = (lga) => {
    setSelectedLga(lga);
    setShowLgaModal(false);
  };

    
    return(
        <SafeAreaView style={styles.container}>
            <Pressable onPress={()=>{

         router.back()

        }} style={{marginLeft:'2%',marginVertical:10}}>

           <Ionicons name="arrow-back" size={24} color="black" />
           </Pressable>

            <View>
                <Text style={{color:'#00000',fontWeight:'bold', fontSize:24,marginLeft:10, marginTop:10}}>Contact Address:</Text>
            </View>



            <View style={{alignSelf:'center',marginHorizontal:'10%', marginTop:30, marginVertical:0, width:'95%'}}>
                 <TouchableOpacity style={mystyles.inputWrapper} onPress={() => setShowStateModal(true)}>
                <TextInput placeholder="State of Residence" style={mystyles.textInput}
                 value={selectedState}
                     editable={false}
                     pointerEvents="none"
                 />
                <AntDesign name="caretdown" size={15} color="#050605" style={mystyles.icon} />
                   </TouchableOpacity>

                   <TouchableOpacity
                            style={mystyles.inputWrapper}
                            onPress={() => {
                            if (selectedState) setShowLgaModal(true);
                            }}
                            disabled={!selectedState}
                        >

                <TextInput placeholder="Local Government Area" style={mystyles.textInput}
                value={selectedLga}
                  editable={false}
                 />
                <AntDesign name="caretdown" size={15} color="#050605" style={mystyles.icon} />
                </TouchableOpacity>

                <Modal visible={showStateModal} transparent animationType="fade">
                        <View style={mystyles.modalBackground}>
                        <View style={mystyles.modalContent}>
                            <FlatList
                            data={Object.keys(stateLgaData)}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleStateSelect(item)} style={mystyles.modalItem}>
                                <Text style={mystyles.modalText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            />
                        </View>
                        </View>
                    </Modal>


                    <Modal visible={showLgaModal} transparent animationType="fade">
                        <View style={mystyles.modalBackground}>
                        <View style={mystyles.modalContent}>
                            <FlatList
                            data={stateLgaData[selectedState]}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleLgaSelect(item)} style={mystyles.modalItem}>
                                <Text style={styles.modalText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            />
                        </View>
                        </View>
                    </Modal>


                <TextInput placeholder="Street Name" style={{backgroundColor:'#FBE9E7', height:65,marginVertical:10, borderRadius:8,paddingLeft:12}} />
            </View>

                <View>

                  <Button onPress={()=>{

                  router.navigate('/Sign Up')

                 }} text={'Next'}/>

                </View>

                 <TouchableOpacity onPress={()=>{router.navigate('/Sign In')}}>
                <View style={{alignSelf:'flex-end'}}>
                    <Text style={{color:'#050605',marginRight:20,fontSize:16}}>Have an account? <Text style={{color:'#FF4242'}}>Login</Text></Text>
                </View>
                </TouchableOpacity>

                <View>
                  <Image resizeMode="contain" style={{width:160, height:3, alignSelf:'center',marginTop:120}} source={require('../../assets/images/Base.png')}/>
                </View>

        </SafeAreaView>
    )
}

export default Address;

const mystyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FBE9E7',
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#FBE9E7',
    borderRadius: 6,
    paddingHorizontal: 100,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
     paddingVertical: 10,
    maxHeight: 200,
    maxWidth:120,
    marginRight:10
  },
  modalItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  modalText: {
    fontSize:16,
},

inputWrapper: {
  backgroundColor: '#FBE9E7',
  height: 60,
  borderRadius: 8,
  paddingHorizontal: 12,
  marginBottom: 15,
  justifyContent: 'center',
  position: 'relative',
},

textInput: {
  height: '100%',
  fontSize: 16,
  color: '#000',
},

icon: {
  position: 'absolute',
  right: 15,
  top: '50%',
  marginTop: -9, // half of icon size (18/2)
},
});
