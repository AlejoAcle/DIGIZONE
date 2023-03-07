import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';



export const ReduxScreen = () => {
  const fondo ={uri:'https://w0.peakpx.com/wallpaper/811/254/HD-wallpaper-black-sand.jpg'}

  const lastApiResult = useSelector((state) => state.lastApiResult);
  console.log(lastApiResult)
  if ( ! lastApiResult){
    return(
      <ImageBackground source={fondo} style={{flex:1,alignItems:'center', width:'100%' , height:'100%', }}>
      <View style={{flex:1, alignItems:'center'}}>
      <Text style={{color:'white', fontSize:30, alignItems:'center', paddingTop:400}}>no data</Text>
      </View>
      </ImageBackground>
    )
  }


//  me trae la info de la ultima llamada...si no hay info un alert...
  return (
    <ImageBackground source={fondo} style={{flex:1,alignItems:'center', width:'100%' , height:'100%', }}>
    <View style={{flex:1 , alignItems: 'center', justifyContent:'center'}}>
        <Text
        style={{fontSize:26, fontWeight:'bold'}}
        > {lastApiResult.email} </Text>
    </View>
    </ImageBackground>
  );
  }








