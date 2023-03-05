import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

export const HomeScreen = () => {

//llamada API

const URL = "https://random.dog/woof.json";

  const getRandomDog = async () =>{
    const response = await fetch(URL)

    const body = await response.json();
    return body.url;
  }

  const [url, setUrl] = useState(null);

  const onClickHandler = async() => {
    const url = await getRandomDog();
    setUrl(url);

  };



  return (
    <View style={{flex:1 , alignItems: 'center', justifyContent:'center', padding:10}}>
        <Text
          style={{fontSize:26, fontWeight:'bold'}}
        > Press the button to get the data </Text>
        <Button 
          title='PRESS ME'
          onPress={onClickHandler}
        ></Button>
        <Text>{url}</Text>
    </View>
  );
}
