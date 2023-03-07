import React from 'react';
// import axios from 'axios';
import {  View, Text, Button, ImageBackground } from 'react-native';
// import {navigation} from 'react-native'
// import { useEffect, useState } from 'react';
import CustomButton from './CustomButton';



export const HomeScreen = () => {
  const fondo ={uri:'https://w0.peakpx.com/wallpaper/811/254/HD-wallpaper-black-sand.jpg'}

  return (
    <ImageBackground source={fondo} style={{flex:1,alignItems:'center', width:'100%' , height:'100%', }}>
      {/* <View style={{flex:1 , alignItems: 'center', justifyContent:'center', padding:10}}> */}
      
        <Text
          style={{fontSize:26, fontWeight:'bold', color:'lightgrey', paddingTop:30}}
        > API call screen </Text>
        {/* <Button 
          title='PRESS ME'
          onPress={filter}
        ></Button> */}
        <CustomButton />
        {/* <Text>{CustomButton}</Text> */}
        
    {/* </View> */}
    </ImageBackground>
  );
}
