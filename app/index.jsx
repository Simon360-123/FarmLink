import {View, Text,TouchableOpacity, Image} from 'react-native'
import { SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {router} from 'expo-router';
import Button from '../components/Button';


const Page = ()=>{
    return(
      <SafeAreaView style={{flex:1,backgroundColor:'#D2EBE4',paddingHorizontal:20}}>

        <View style={{width: 200,
              height: 200,
              backgroundColor: '#047857',
              position:'absolute', 
              top:-20,
              left:-90, 
              borderTopRightRadius: 200,
              borderBottomRightRadius: 180 
              }}>
        </View>

        <View style={{
          position: 'absolute',
          top: -40,
          left: -30,
          width: 200,
          height: 150,
          backgroundColor: '#047857', 
          borderBottomRightRadius: 90,
        }} />

        <View>
          <Image resizeMode='contain' source={require('../assets/images/onboarding.png')} 
          style={{width: 231, height:299,alignSelf:'center',marginTop:190,marginBottom:30}}/>
        </View>

        <View style={{marginBottom:20}}>
          <Text style={{color:'#000000',fontSize:20,fontWeight:700,textAlign:'center'}}>Connect directly with buyers on</Text>
          <Text style={{color:'#000000',fontSize:20,fontWeight:700,textAlign:'center'}}>FarmLink</Text>
        </View>

        <View>
          <Text style={{color:'#000000',fontSize:16,fontWeight:600,textAlign:'center'}}>Sell farm produce with ease and buy directly </Text>
          <Text style={{color:'#000000',fontSize:16,fontWeight:600,textAlign:'center',marginBottom:25}}>from farmers</Text>
        </View>
        
          <TouchableOpacity onPress={()=>{
            router.navigate('/Role')
          }}
              style={{backgroundColor:'#047857',height:50, width:'95%', alignSelf:'center',
              justifyContent:'center',alignItems:'center',borderRadius:20, marginBottom:10}}>

            <Text style={{color:'white',fontSize:24,fontWeight:800}}>Get Started</Text>
          </TouchableOpacity>

          <View style={{ alignSelf: 'flex-end', flexDirection: 'row', marginRight: 20 }}>
            <Text style={{ color: '#050605', fontSize: 16 }}>Already have an account? </Text>
              <TouchableOpacity onPress={() => router.navigate('/Sign In')}>
                <Text style={{ color: '#FF4242', fontSize: 16 }}>Login</Text>
               </TouchableOpacity>
             </View>
        


      </SafeAreaView>
      
    )
}

export default Page;