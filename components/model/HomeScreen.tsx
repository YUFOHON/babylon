import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  Model  from './Model';



const HomeScreen: React.FC = () => {
  return (
    <>
    <Model style={{flex: 1}} />
    </>
  );
};

export default HomeScreen;