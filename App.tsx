/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import CurrentDate from './components/Date/CurrentDate';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import HomeScreen from './screens/HomeScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
import Login from './screens/LoginScreen';
import Setting from './screens/SettingScreen';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
   
    <Tab.Navigator
      initialRouteName="Feed"
     
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Hello"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CurrentDate"
        component={Login}
        options={{
          tabBarLabel: 'Training',
          tabBarIcon:({color,size})=>(
            <FontAwesome5 name="dumbbell" color={color} size={size} />
  ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon:({color,size})=>(
            <MaterialIcons name="settings" color={color} size={size}/>
  ),
        }}
      />
    </Tab.Navigator>
    
  );
}

const App = () => {
  return (
    <>
    <TailwindProvider>
    
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    </TailwindProvider>
    </>
  );
};

export default App;
