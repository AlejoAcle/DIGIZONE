import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { GreatPixelScreen } from '../screens/GreatPixelScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ReduxScreen } from '../screens/ReduxScreen';
import  Icon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

export const BottomTab = () =>{

    return(
        <Tab.Navigator initialRouteName={HomeScreen} screenOptions={ ({route}) => ({

             tabBarActiveBackgroundColor:'lightgrey',
             tabBarActiveTintColor: 'blue',
             tabBarIcon: ({focused, color, size})=>{
                let iconName = '';
                switch ( route.name) {
                    case 'Home':
                        iconName = focused ? 'home' : 'home-outline';
                        break;
                    case 'Redux':
                        iconName = focused ? 'bookmark' :'bookmark-outline';
                        break;
                    case 'GreatPixel':
                        iconName =  focused ?  'cube' : 'cube-outline';
                        break;
                }

                return <Icon name={ iconName } size = {size} color= {color} />

            }
            })}
        >
            
            <Tab.Screen name='Redux' component= { ReduxScreen } options={{tabBarLabel: 'Redux'}}/>
            <Tab.Screen  name='Home' component= { HomeScreen }  options={{tabBarLabel: 'API' }}/>
            <Tab.Screen name='GreatPixel' component= { GreatPixelScreen } options={{tabBarLabel: 'GreatPixel'}} />
        </Tab.Navigator>
    );
}