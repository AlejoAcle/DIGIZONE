import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { ReduxScreen } from '../screens/ReduxScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () =>{

    return(
        <Tab.Navigator>
            <Tab.Screen name='HomeScreen' component= { HomeScreen } />
            <Tab.Screen name='ReduxScreen' component= { ReduxScreen } />
        </Tab.Navigator>
    );
}