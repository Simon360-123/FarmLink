import { Platform, StyleSheet,Image, View, Text,Pressable, TouchableOpacity,pickImage } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const Profile =()=>{
  return(
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row',gap:5,alignItems:'center'}}>
        
        <Pressable onPress={()=>{

          router.back()

            }} style={{marginLeft:'1%',marginVertical:20}}>

          <Ionicons name="arrow-back" size={24} color="black" />
            
        </Pressable>
        <Text style={{fontSize:24}}>Profile</Text>
      </View>

      <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
        <TouchableOpacity onPress={pickImage}>
          <Image resizeMode="contain" style={{width:90, height:90}} source={require('../../assets/images/Profile icon.png')}/>
        </TouchableOpacity>
        <Text style={{fontSize:30}}>Tsegen Simon</Text>
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
            <AntDesign name="infocirlceo" size={24} color="orange" style={{paddingLeft:20}} />
            <Text>Personal Information</Text>
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
            <Ionicons name="map-outline" size={24} color="blue" style={{paddingLeft:20}}  />
            <Text>Address</Text>
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
          <Feather name="shopping-cart" size={24} color="blue" style={{paddingLeft:20}}/>
          <Text>Cart</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: '#ECECEC',
          padding: 15
        }}>
          <View style={{flexDirection:'row',gap:20}}>
          <Ionicons name="notifications-outline" size={24} color="orange" style={{paddingLeft:20}} />
          <Text>Notifications</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: '#ECECEC',
          padding: 15,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}>
          <View style={{flexDirection:'row',gap:20}}>
          <MaterialIcons name="payment" size={24} color="blue" style={{paddingLeft:20}} />
          <Text>Payment Methods</Text>
          </View>
        </TouchableOpacity>
     </View>

     <View style={{marginTop:20}}> 
        
          <TouchableOpacity style={{ 
            backgroundColor: '#ECECEC', 
            padding: 15, 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20 
          }}>
            <View style={{flexDirection:'row',gap:20}}>
           <EvilIcons name="question" size={24} color="#FF4242"style={{paddingLeft:20}} />
            <Text>FAQs</Text>
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
            <AntDesign name="setting" size={24} color="blue"  style={{paddingLeft:20}}  />
            <Text>Settings</Text>
            </View>
        </TouchableOpacity>
      </View>


      <View style={{ borderRadius: 20, overflow: 'hidden',marginTop:20 }}>
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

export default Profile;