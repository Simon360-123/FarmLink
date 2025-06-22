import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons,Octicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function TabLayout() {
  //const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#047857",
        tabBarInactiveTintColor: '#047857',
        headerShown: false,
        // tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
        <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={28} name={focused? "home": 'home-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
         tabBarIcon: ({ focused }) => (
      <Image
        source={
          focused
            ? require('../../assets/images/Vector.png')
            : require('../../assets/images/Variant21.png')
        }
        style={{ width: 24, height: 24, tintColor: focused ? '#047857' : '#047857' }}
      />
    ),
  }}
/>

      
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={28} name={focused? "message-processing": 'message-processing-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color,focused }) => <MaterialCommunityIcons size={28} name={focused? "account": 'account-outline'} color={color} />,
         
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={28} name={focused? "cog": 'cog-outline'} color={color} />,
        }}
      />
    </Tabs>
  );
}
