import React from 'react';
import {  View, Text, Button } from 'react-native';
import {navigation} from 'react-native'
import { useEffect, useState } from 'react';

export const HomeScreen = () => {

//llamada API
// const URL = "https://random.dog/woof.json";

//   const getRandomDog = async () =>{
//     const response = await fetch(URL)

//     const body = await response.json();
//     return body.url;
//   }
  
// //variables de estado de la url
//   const [url, setUrl] = useState(null);

// //cada press recibe un estado nuevo, nueva llamada
//   const onClickHandler = async() => {
//     const url = await getRandomDog();
//     setUrl(url);

//   };


  const [data, setData] = useState();
  function handleOnPress() {
    navigation.navigate('Redux')
  }

  useEffect(function(){
    async function fetchData(){
    const response = await fetch('https://randomuser.me/api/');
    const json = await response.json();
    setData(json.data);
    }
    fetchData();
  },[]);



  return (
    <View style={{flex:1 , alignItems: 'center', justifyContent:'center', padding:10}}>
      
        <Text
          style={{fontSize:26, fontWeight:'bold'}}
        > Press the button to get the data </Text>
        <Button 
          title='PRESS ME'
          onPress={handleOnPress}
        ></Button>
        {/* <Text>{url}</Text> */}
        
    </View>
  );
}
