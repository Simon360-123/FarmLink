import { TouchableOpacity,Text } from "react-native";
//import COLORS from "../constants/Colors";

const Button = ({text, onPress, textColor})=>{
    return(
        <TouchableOpacity onPress={onPress} style={{height:50, width:'95%', alignSelf:'center', backgroundColor:'#047857',marginBottom:20, borderRadius:20, marginTop:130, justifyContent:'center'}}>
            <Text style={{textAlign:'center', color:'white', fontSize:24,fontWeight:'bold'}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;