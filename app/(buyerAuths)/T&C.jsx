import { Text,View, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";



const termsScreen = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                    <Pressable onPress={()=>{

                router.back()

                }} style={{marginLeft:1,marginVertical:10}}>

                <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
                <Text style={{fontSize:24,fontWeight:'bold'}}>Terms & Conditions</Text>
           </View>

           <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{textAlign:'justify',marginHorizontal:20}}>
                <Text>1. Acceptance of Terms:</Text>
                         <Text style={{textAlign:'justify',marginBottom:20}}>By accessing and using the FarmLink platform, users agree to abide by these Terms  of Use.</Text>
                <Text>2. Eligibility  Users must:</Text>
                         <Text style={{textAlign:'justify',marginBottom:20}}>Be 18 years or older and must be a Literate ( must be able to read and write). Have access to a smartphone with internet connectivity. Provide accurate and verifiable information during registration. </Text>
                <Text>3. User Responsibilities:</Text>
                         <Text style={{textAlign:'justify',marginBottom:20}}>Farmers must list only genuine, farm-fresh produce. Buyers must complete transactions in good faith as agreed. All users must refrain from fraudulent, abusive, or harmful behaviour.</Text>
                <Text>4. Platform Rights  FarmLink reserves the right to:</Text>
                         <Text style={{textAlign:'justify',marginBottom:20}}>Suspend or terminate accounts that violate the terms. Modify the platform and its features without prior notice.</Text>
                <Text>5. Limitation of Liability  FarmLink is not liable for:</Text>
                         <Text style={{textAlign:'justify',marginBottom:20}}>Losses due to user miscommunication or product misrepresentation. Delays in delivery or transaction disputes between buyers and farmers.</Text>
                <Text>6. Dispute Resolution:</Text>
                         <Text style={{textAlign:'justify',marginBottom:20}}>Disputes will be handled through a support ticket system. Users agree to attempt to  resolve issues amicably before escalating to legal action.</Text>
                <Text>7. Updates:</Text>
                         <Text style={{textAlign:'justify',marginBottom:20}}>We may revise these Terms of Use from time to time. Continued use of the platform  after changes implies acceptance.</Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default termsScreen;