import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

export const GreatPixelScreen = () => {
  //take the image
  const image = {uri: 'https://reactjs.org/logo-og.png'}

  return (
    <>
    
      {/* <View style={{flex:1 , alignItems: 'center', justifyContent:'center'}}> */}
        
      <ImageBackground source={image} style={{flex:1,alignItems:'center', width:'100%' , height:'100%'}} >
        
        <Text
          style={{flex:1, alignItems:'center',justifyContent:'center',fontSize:26, fontWeight:'bold', color:'white'}}
        > GreatPixel </Text>

    </ImageBackground>

      
    </>
  );
}
