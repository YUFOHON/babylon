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
import CurrentDate from './components/model/CurrentDate';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/model/HomeScreen';
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
       
        }}
      />
      <Tab.Screen
        name="CurrentDate"
        component={CurrentDate}
        options={{
          tabBarLabel: 'Training',
         
        }}
      />
      <Tab.Screen
        name="Settings"
        component={CurrentDate}
        options={{
          tabBarLabel: 'Settings',
          
        }}
      />
    </Tab.Navigator>
  );
}
import VoiceInput from './components/VoiceInput';

const App = () => {
  return (
    <>
    
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    </>
  );
};

export default App;
