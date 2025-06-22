import { Platform, StyleSheet, View, Text, TextInput,TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



const Explore = ()=>{
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <View style={{ position: 'relative', width: 290, height: 41 }}>
          <TextInput style={{backgroundColor: '#ffffff',paddingLeft: 15,paddingRight: 40,width: '100%',height: '100%',borderRadius: 12,borderColor: '#050605',borderWidth: 1}}
          placeholder="Search for products or categories..." placeholderTextColor={'#828382'}/>
          <Ionicons name="search" size={24} color="#828382" style={{ position: 'absolute', right: 10, top: 10 }}/>
          </View>

          <TouchableOpacity style={{marginLeft: 10,width: 41,height: 41,borderWidth: 1,borderRadius: 10,borderColor: '#000',justifyContent: 'center',alignItems: 'center'}}>
          <FontAwesome6 name="sliders" size={30} color="#615F5F"/>
          </TouchableOpacity>
      </View>

          <View>
            <Image resizeMode='contain' source={require('../../assets/images/Product Card 1.png')} style={{width:340, height:218,alignSelf:'center',marginTop:20}}/>
          </View>
          <View>
            <Image resizeMode='contain' source={require('../../assets/images/Product Card 2.png')} style={{width:340, height:218,alignSelf:'center',marginTop:5}}/>
          </View>
          <View>
            <Image resizeMode='contain' source={require('../../assets/images/Product Card 3.png')} style={{width:340, height:218,alignSelf:'center',marginTop:5}}/>
          </View>
          <View>
            <Image resizeMode='contain' source={require('../../assets/images/Product Card 4.png')} style={{width:340, height:218,alignSelf:'center',marginTop:5}}/>
          </View>
          </ScrollView>
    </SafeAreaView>
  )
}

export default Explore;

