import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Voices from '../components/VoiceInput';
import  Model  from '../components/model/Model';



const HomeScreen: React.FC = () => {
  return (
    <>
    <Model style={{flex: 1}} />
    <Voices  />
    </>
  );
};

export default HomeScreen;