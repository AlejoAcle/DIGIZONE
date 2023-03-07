import React from 'react';
// import axios from 'axios';
import {  View, Text, Button } from 'react-native';
// import {navigation} from 'react-native'
// import { useEffect, useState } from 'react';
import CustomButton from './CustomButton';



export const HomeScreen = () => {

//llamada API



  // const [data, setData] = useState();
  // function handleOnPress() {
  //   navigation.navigate('Redux')
  // }


  // useEffect(function(){
  //   async function fetchData(){
  //   const response = await fetch('https://randomuser.me/api/');
  //   const json = await response.json();
  //   setData(json.data);
  //   }
  //   fetchData();
  // },[]);


  // const CustomButton = () => {
  //   const [displayText, setDisplayText] = useState('');
  
  //   const handleButtonPress = () => {
  //     setDisplayText('Texto que se muestra después de presionar el botón');
  //   };
  
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <TouchableOpacity onPress={handleButtonPress}>
  //         <Text>Presiona aquí</Text>
  //       </TouchableOpacity>
  //       <Text>{displayText}</Text>
  //     </View>
  //   );
  // };



 
  


  return (
    <View style={{flex:1 , alignItems: 'center', justifyContent:'center', padding:10}}>
      
        <Text
          style={{fontSize:26, fontWeight:'bold'}}
        > API call screen </Text>
        {/* <Button 
          title='PRESS ME'
          onPress={filter}
        ></Button> */}
        <CustomButton />
        {/* <Text>{CustomButton}</Text> */}
        
    </View>
  );
}
