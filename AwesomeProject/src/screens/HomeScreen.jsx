import React from 'react';
import { View, Text, Button } from 'react-native';

export const HomeScreen = () => {






  return (
    <View style={{flex:1 , alignItems: 'center', justifyContent:'center', padding:10}}>
        <Text
          style={{fontSize:26, fontWeight:'bold'}}
        > Press the button to get the data </Text>
        <Button 
          title='PRESS ME'
          onPress={''}
        ></Button>
    </View>
  );
}
