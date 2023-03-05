import React from 'react';
import { View, Text , Alert} from 'react-native';

export const ReduxScreen = () => {
 //me trae la info de la ultima llamada...si no hay info un alert...
  return (
    <View style={{flex:1 , alignItems: 'center', justifyContent:'center'}}>
        <Text
        style={{fontSize:26, fontWeight:'bold'}}
        > Redux </Text>
    </View>
  );
}
