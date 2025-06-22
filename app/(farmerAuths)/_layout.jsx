import { Stack } from "expo-router"


const farmerAuthScreens = ()=>{
    return(
        <Stack screenOptions={{headerShown:false}}>
           <Stack.Screen name="farmer SignUp"/>
           <Stack.Screen name="Address"/>
           <Stack.Screen name="Sign Up"/>
           <Stack.Screen name="BusinessInfo"/>
           <Stack.Screen name="ProfileUpload"/>
           <Stack.Screen name="farmer SignIn"/>
           <Stack.Screen name="Reset Password"/>
           <Stack.Screen name="OTP"/>
           <Stack.Screen name="T&C"/>

        </Stack>
    )
}

export default farmerAuthScreens;