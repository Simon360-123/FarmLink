import { SafeAreaView } from "react-native-safe-area-context"
import {Text, TouchableOpacity, View,TextInput,ScrollView, Image} from 'react-native';
import React, {useState} from 'react'
import styles from "../styles";
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Home = ()=>{
    const [selected, setSelected] = useState('');

    const categories =['All','Special Offers','Popular Sales','Recently viewed','New Product'];

    return(
        <SafeAreaView style={styles.container}>
    
            <View style={{flexDirection:'row',justifyContent:'space-between', marginVertical:10}}>
                <View >
                <Text style={{color:'#00000', fontSize:24, fontWeight:'medium'}}> Hello Simon!</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center',gap:12,}}>

                    <TouchableOpacity>
                        <View style={{ width: 44,height:36,backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center',borderColor:'#D7F0D8',borderRadius:8,borderWidth:1}}>
                        <Ionicons name="cart-outline" size={24} color="#047857" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{width:44,height:36,backgroundColor: '#ffffff',justifyContent:'center',alignItems:'center',borderColor:'#D7F0D8',borderRadius:8,borderWidth:1}}>
                        <SimpleLineIcons name="bell" size={24} color="#FF9D00" />
                        </View>
                    </TouchableOpacity>

                </View>

            </View>

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

            <View style={{flexDirection:'row',justifyContent:'space-between', marginVertical:40}}>

                <Text style={{fontSize:20,color:'#00000'}}>Recommended for you</Text>

                <TouchableOpacity>
                <Text style={{fontSize:14,color:'#FFA920',marginTop:10}}>See All</Text>
                </TouchableOpacity>

            </View>

                    {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <TouchableOpacity>
                        <Text>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text>    Special Offers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text>    Popular Sales</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text>    Recently viewed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text>    New Product</Text>
                        </TouchableOpacity>
                        </ScrollView>

                    </View> */}

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {categories.map((category) => (
                    <TouchableOpacity key={category} onPress={() => setSelected(category)}>
                        <View style={{ 
                            borderBottomWidth: selected === category ? 2 : 0, 
                            borderBottomColor: selected === category ? '#FFA920' : 'transparent', 
                            paddingHorizontal: 10, 
                            paddingVertical: 5 
                            }}>
                            <Text style={{ color: selected === category ? '#047857' : 'black' }}>
                                {category}
                        </Text>
                        </View>
                    </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

                        <View>
                            <Image resizeMode='contain' source={require('../../assets/images/holder 1.png')} style={{width:160,height:200}}/>
                            <Text style={{fontSize:11}}>Fresh Ripe Organic Tomatoes</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:18,marginLeft:-20,marginTop:5}}>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Text>5.0</Text>
                            </View>

                            <View style={{marginTop:5}}>
                                  <Text style={{fontSize:12,color:'#059669'}}>#3 Top Rated<Text style={{fontSize:12,color:'#050605'}}> in Tomatoes</Text></Text>
                            </View>

                            <View style={{flexDirection: 'row',backgroundColor: '#FFA500',alignItems: 'center',borderWidth: 1,borderColor: '#FFA500',overflow: 'hidden',alignSelf: 'flex-start',marginTop:5}}>
                                <Text style={{color: '#FFA500',fontWeight: 'bold',paddingVertical: 2,paddingHorizontal: 6,backgroundColor: '#fff'}}>₦6,000.00</Text>
                                <Text style={{color: '#fff',fontSize: 12,paddingHorizontal: 6 }}>1k+ sold</Text>
                            </View>

                        </View>

                        <View>
                            <Image resizeMode='contain'source={require('../../assets/images/holder 2.png')} style={{width:160,height:200}}/>
                            <Text style={{fontSize:11}}>Fresh Ripe Organic Oranges</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:18,marginLeft:-20,marginTop:5}}>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/Vector1.png')}/>
                                <Text>4.5</Text>
                            </View>

                            <View style={{marginTop:5}}>
                                <Text style={{color:'#FF4242',fontSize:12}}>ONLY 3 BASKETS LEFT</Text>
                            </View>

                            <View style={{flexDirection: 'row',backgroundColor: '#FFA500',alignItems: 'center',borderWidth: 1,borderColor: '#FFA500',overflow: 'hidden',alignSelf: 'flex-start',marginTop:5}}>
                                <Text style={{color: '#FFA500',fontWeight: 'bold',paddingVertical: 2,paddingHorizontal: 6,backgroundColor: '#fff'}}>₦2,000.00</Text>
                                <Text style={{color: '#fff',fontSize: 12,paddingHorizontal: 6 }}>200+ sold</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

                        <View>
                            <Image resizeMode='contain' source={require('../../assets/images/holder 3.png')} style={{width:160,height:200}}/>
                            <Text style={{fontSize:11}}>Fresh Ripe Organic Okra</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:18,marginLeft:-20,marginTop:5}}>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Text>4.0</Text>
                            </View>

                            <View style={{marginTop:5}}>
                                  <Text style={{fontSize:12,color:'#059669'}}>#3 Top Rated<Text style={{fontSize:12,color:'#050605'}}> in Tomatoes</Text></Text>
                            </View>

                            <View style={{flexDirection: 'row',backgroundColor: '#FFA500',alignItems: 'center',borderWidth: 1,borderColor: '#FFA500',overflow: 'hidden',alignSelf: 'flex-start',marginTop:5}}>
                                <Text style={{color: '#FFA500',fontWeight: 'bold',paddingVertical: 2,paddingHorizontal: 6,backgroundColor: '#fff'}}>₦1,000.00</Text>
                                <Text style={{color: '#fff',fontSize: 12,paddingHorizontal: 6 }}>1k+ sold</Text>
                            </View>

                        </View>

                        <View>
                            <Image resizeMode='contain'source={require('../../assets/images/holder 4.png')} style={{width:160,height:200}}/>
                            <Text style={{fontSize:11}}>Live Adult Chicken</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:18,marginLeft:-20,marginTop:5}}>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/Vector1.png')}/>
                                <Text>4.5</Text>
                            </View>

                            <View style={{marginTop:5}}>
                                  <Text style={{fontSize:12,color:'#059669'}}>#3 Top Rated<Text style={{fontSize:12,color:'#050605'}}> in Tomatoes</Text></Text>
                            </View>

                            <View style={{flexDirection: 'row',backgroundColor: '#FFA500',alignItems: 'center',borderWidth: 1,borderColor: '#FFA500',overflow: 'hidden',alignSelf: 'flex-start',marginTop:5}}>
                                <Text style={{color: '#FFA500',fontWeight: 'bold',paddingVertical: 2,paddingHorizontal: 6,backgroundColor: '#fff'}}>₦10,000.00</Text>
                                <Text style={{color: '#fff',fontSize: 12,paddingHorizontal: 6 }}>200+ sold</Text>
                            </View>

                        </View>

                    </View>
                </View>

                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

                        <View>
                            <Image resizeMode='contain' source={require('../../assets/images/holder 1.png')} style={{width:160,height:200}}/>
                            <Text style={{fontSize:11}}>Fresh Ripe Organic Tomatoes</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:18,marginLeft:-20,marginTop:5}}>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Text>5.0</Text>
                            </View>

                            <View style={{marginTop:5}}>
                                  <Text style={{fontSize:12,color:'#059669'}}>#3 Top Rated<Text style={{fontSize:12,color:'#050605'}}> in Tomatoes</Text></Text>
                            </View>

                            <View style={{flexDirection: 'row',backgroundColor: '#FFA500',alignItems: 'center',borderWidth: 1,borderColor: '#FFA500',overflow: 'hidden',alignSelf: 'flex-start',marginTop:5}}>
                                <Text style={{color: '#FFA500',fontWeight: 'bold',paddingVertical: 2,paddingHorizontal: 6,backgroundColor: '#fff'}}>₦6,000.00</Text>
                                <Text style={{color: '#fff',fontSize: 12,paddingHorizontal: 6 }}>1k+ sold</Text>
                            </View>

                        </View>
                        
                        <View>
                            <Image resizeMode='contain'source={require('../../assets/images/holder 2.png')} style={{width:160,height:200}}/>
                            <Text style={{fontSize:11}}>Fresh Ripe Organic Oranges</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:18,marginLeft:-20,marginTop:5}}>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/Vector1.png')}/>
                                <Text>4.5</Text>
                            </View>

                             <View style={{marginTop:5}}>
                                <Text style={{color:'#FF4242',fontSize:12}}>ONLY 3 BASKETS LEFT</Text>
                            </View>

                            <View style={{flexDirection: 'row',backgroundColor: '#FFA500',alignItems: 'center',borderWidth: 1,borderColor: '#FFA500',overflow: 'hidden',alignSelf: 'flex-start',marginTop:5}}>
                                <Text style={{color: '#FFA500',fontWeight: 'bold',paddingVertical: 2,paddingHorizontal: 6,backgroundColor: '#fff'}}>₦2,000.00</Text>
                                <Text style={{color: '#fff',fontSize: 12,paddingHorizontal: 6 }}>200+ sold</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

                        <View>
                        <Image resizeMode='contain' source={require('../../assets/images/holder 3.png')} style={{width:160,height:200}}/>
                        <Text style={{fontSize:11}}>Fresh Ripe Organic Okra</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:18,marginLeft:-20,marginTop:5}}>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Text>4.0</Text>
                            </View>

                            <View style={{marginTop:5}}>
                                  <Text style={{fontSize:12,color:'#059669'}}>#3 Top Rated<Text style={{fontSize:12,color:'#050605'}}> in Tomatoes</Text></Text>
                            </View>

                            <View style={{flexDirection: 'row',backgroundColor: '#FFA500',alignItems: 'center',borderWidth: 1,borderColor: '#FFA500',overflow: 'hidden',alignSelf: 'flex-start',marginTop:5}}>
                                <Text style={{color: '#FFA500',fontWeight: 'bold',paddingVertical: 2,paddingHorizontal: 6,backgroundColor: '#fff'}}>₦1,000.00</Text>
                                <Text style={{color: '#fff',fontSize: 12,paddingHorizontal: 6 }}>1k+ sold</Text>
                            </View>

                        </View>

                        <View>
                            <Image resizeMode='contain'source={require('../../assets/images/holder 4.png')} style={{width:160,height:200}}/>
                            <Text style={{fontSize:11}}>Live Adult Chicken</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:18,marginLeft:-20,marginTop:5}}>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/star.png')}/>
                                <Image resizeMode="contain" style={{width:10.08,height:9.58,marginTop:3,marginLeft:2.9}} source={require('../../assets/images/Vector1.png')}/>
                                <Text>4.5</Text>
                            </View>

                            <View style={{marginTop:5}}>
                                  <Text style={{fontSize:12,color:'#059669'}}>#3 Top Rated<Text style={{fontSize:12,color:'#050605'}}> in Tomatoes</Text></Text>
                            </View>

                            <View style={{flexDirection: 'row',backgroundColor: '#FFA500',alignItems: 'center',borderWidth: 1,borderColor: '#FFA500',overflow: 'hidden',alignSelf: 'flex-start',marginTop:5}}>
                                <Text style={{color: '#FFA500',fontWeight: 'bold',paddingVertical: 2,paddingHorizontal: 6,backgroundColor: '#fff'}}>₦10,000.00</Text>
                                <Text style={{color: '#fff',fontSize: 12,paddingHorizontal: 6 }}>200+ sold</Text>
                            </View>

                        </View>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;

