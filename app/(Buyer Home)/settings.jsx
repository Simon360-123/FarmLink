import { SafeAreaView } from "react-native-safe-area-context";
import {Text, View, Pressable,TouchableOpacity} from 'react-native';
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Octicons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';




const Settings = ()=>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white',paddingHorizontal:20}}>
            <View style={{flexDirection:'row',gap:5,alignItems:'center'}}>
        
        <Pressable onPress={()=>{

          router.back()

            }} style={{marginLeft:'1%',marginVertical:20}}>

          <Ionicons name="arrow-back" size={24} color="black" />
            
        </Pressable>
        <Text style={{fontSize:24}}>Settings</Text>
      </View>

      <View style={{marginBottom:20}}>
      <View style={{marginTop:20}}> 
        
          <TouchableOpacity style={{ 
            backgroundColor: '#ECECEC', 
            padding: 15, 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20 
          }}>
            <View style={{flexDirection:'row',gap:20}}>
            <Octicons name="arrow-switch" size={24} color="blue"  style={{paddingLeft:20}} />
            <Text>Switch Account</Text>
            </View>
          </TouchableOpacity>
      </View>
        
      <View>
        <TouchableOpacity style={{ 
            backgroundColor: '#ECECEC', 
            padding: 15, 
            borderBottomLeftRadius: 20, 
            borderBottomRightRadius: 20 
          }}>
            <View style={{flexDirection:'row',gap:20}}>
            <Ionicons name="language-outline" size={24} color="orange"  style={{paddingLeft:20}}  />
            <Text>Language</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>

    <View>
        <TouchableOpacity style={{
          backgroundColor: '#ECECEC',
          padding: 15,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }}>
          <View style={{flexDirection:'row',gap:20}}>
          <EvilIcons name="lock" size={26} color="blue" style={{paddingLeft:20}}/>
          <Text>Privacy Policy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: '#ECECEC',
          padding: 15
        }}>
          <View style={{flexDirection:'row',gap:20}}>
          <Ionicons name="chatbox-outline" size={24} color="orange"  style={{paddingLeft:20}} />
          <Text>Customer Support</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: '#ECECEC',
          padding: 15,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}>
          <View style={{flexDirection:'row',gap:20}}>
          <Entypo name="text-document" size={24} color="blue"  style={{paddingLeft:20}} />
          <Text>Terms & Conditions</Text>
          </View>
        </TouchableOpacity>
     </View>

     <View style={{ borderRadius: 20, overflow: 'hidden',marginTop:40}}>
        <TouchableOpacity style={{
          backgroundColor: '#ECECEC',
          padding: 15,
        }}>
          <View style={{flexDirection:'row',gap:20}}>
         <AntDesign name="delete" size={24} color="orange"  style={{paddingLeft:20}}/>
          <Text>Delete Account</Text>
          </View>
        </TouchableOpacity>
      </View>

     <View style={{ borderRadius: 20, overflow: 'hidden',marginTop:40 }}>
        <TouchableOpacity style={{
          backgroundColor: '#ECECEC',
          padding: 15,
        }}>
          <View style={{flexDirection:'row',gap:20}}>
          <Feather name="log-out" size={24} color="#FF4242" style={{paddingLeft:20}}/>
          <Text>Log out</Text>
          </View>
        </TouchableOpacity>
      </View>
           

           
     </SafeAreaView>
    )
}

export default Settings;
