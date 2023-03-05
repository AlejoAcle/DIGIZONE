import React from 'react';
import {View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './src/navigation/BottomTab';
import BackgroundImg from './src/assets/BackgroundImage';

export default function App(){
  return (
    <NavigationContainer >
      
      <BottomTab />
    </NavigationContainer>
  )
}
