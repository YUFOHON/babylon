import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  Model  from './model/Model';
import VoiceInput  from './VoiceInput';


const HomeScreen: React.FC = () => {
  return (
    <>
    <Model style={{flex: 1}} />
    <VoiceInput />
    </>
  );
};

export default HomeScreen;