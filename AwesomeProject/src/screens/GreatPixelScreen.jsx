import React from 'react';
import { View, Text, Image, ImageBackground, ActivityIndicator } from 'react-native';

export const GreatPixelScreen = () => {
  //take the image
  const image = {uri: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80'}
  const flylogo = {uri: 'https://static.wikia.nocookie.net/heroes-villanos-vacas-y-minions/images/1/1d/Kevin_minions.png/revision/latest?cb=20211226130435&path-prefix=es'}

  return (
    <>
    
      {/* <View style={{flex:1 , alignItems: 'center', justifyContent:'center'}}> */}
        
      <ImageBackground source={image} style={{flex:1,alignItems:'center', width:'100%' , height:'100%'}} >
        
        <Text
          style={{flex:1, alignItems:'center',justifyContent:'center',fontSize:26, fontWeight:'bold', color:'white'}}
        > GreatPixel </Text>

        <View style={{flexDirection:'row', flex:1, alignItems:'center'}}>
          <Image style={{width:50,height: 50,}}source={{uri: 'https://static.vecteezy.com/system/resources/previews/009/665/304/original/cute-kitty-cat-head-cartoon-element-free-png.png'}} />
          <ActivityIndicator size="large" color="#00ff00" />
          <Image style={{width:50,height: 50,}}source={{uri: 'https://static.vecteezy.com/system/resources/previews/010/178/999/original/cartoon-small-pizza-file-free-png.png',}} />
        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:50,height: 50,}}source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}} />
         <Image style={{width:50,height: 50,}}source={{uri: 'https://www.pngarts.com/files/5/Cookie-Monster-PNG-Background-Image.png',}} />
         <Image style={{width:50,height: 50,}}source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}} />
        </View>

        <View style={{flexDirection:'row', flex:1, alignItems:'center'}}>
          <Image style={{width:50,height: 50,}}source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}} />
          <Image style={{width:50,height: 50,}}source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png',}} />
          <Image style={{width:50,height: 50,}}source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}} />
        </View>

    </ImageBackground>

    

      
    </>
  );
}
