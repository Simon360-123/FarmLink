import { Stack } from "expo-router"


const AuthScreens = ()=>{
    return(
        <Stack screenOptions={{headerShown:false}}>
           <Stack.Screen name="Role"/>
           <Stack.Screen name="Address"/>
           <Stack.Screen name="Sign Up"/>
           <Stack.Screen name="Business"/>
           <Stack.Screen name="ProfileUpload"/>
           <Stack.Screen name="Sign In"/>
           <Stack.Screen name="Reset Password"/>
           <Stack.Screen name="OTP"/>
           <Stack.Screen name="T&C"/>

        </Stack>
    )
}

export default AuthScreens;