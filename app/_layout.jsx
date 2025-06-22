import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


export default function RootLayout() {
    const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Signika: require('../assets/fonts/Signika-Bold.ttf'),
    Signika: require('../assets/fonts/Signika-Light.ttf'),
    Signika: require('../assets/fonts/Signika-Regular.ttf'),
    Signika: require('../assets/fonts/Signika-SemiBold.ttf'),
  });

  if (!loaded) {
     return null;
  }

  return (
   
      <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name="index"/>
        <Stack.Screen name="(Buyer Home)"/>
        <Stack.Screen name="(buyerAuths)"/>
        <Stack.Screen name="(farmerAuths)"/>
       
      </Stack>
     
   
  );
}
