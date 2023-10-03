import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Voices from '../components/VoiceInput';
import  Model  from '../components/model/Model';
import Cv from '../components/Cv/Cv';


const HomeScreen: React.FC = () => {
  return (
    <>
    <Cv />
    {/* <Model style={{flex: 1}} /> */}
    {/* <Voices  /> */}
    </>
  );
};

export default HomeScreen;