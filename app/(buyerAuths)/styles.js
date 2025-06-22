import { StyleSheet, Text } from "react-native"
import COLORS from "../../constants/mycolors";

const authStyles = StyleSheet.create({
    authText:{
        fontFamily:'Signika-Bold',
        color: '#00000',
        fontSize: 20
    },

    // secondContainer:{
    //     marginTop:30
    // },

    // formContainer:{
    //     gap:10,
    //     marginVertical:10
    // },

    formText:{
        fontFamily:'Medium',
        fontSize:16,
        color:COLORS.text2
    },

    input:{
        height:65,
        backgroundColor:COLORS.Background2,
        borderRadius:8,
        color:COLORS.white,
        paddingLeft:20

    },
    buttonContainer:{
        marginTop:10
    },

    // footerNote:{
    //     textAlign:'center',
    //     fontFamily: 'PoppinsRegular',
    //     color:COLORS.text2,
    //     marginTop:-30
    // },
    // auth:{
    //     color:COLORS.primary,
    //     fontFamily:'SemiBold'
    // },
    // image:{
    //     width:115
    // }
})

export default authStyles;