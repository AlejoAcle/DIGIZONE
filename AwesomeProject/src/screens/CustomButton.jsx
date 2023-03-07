
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, Image, } from 'react-native';
import { useDispatch } from 'react-redux';


const setLastApiResult = (response) => ({
  type: 'SET_LAST_API_RESULT',
  payload: response,
});



const CustomButton = () => {

 const dispatch = useDispatch();

//variables y estados, datos e indice de datos
const [data, setData] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);


//Llamada y almaceamiento del 'nuevo' estado
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const json = await response.json();
      console.log(json.results)
      const lastEntry = json.results[json.results.count - 1];
      dispatch(setLastApiResult(lastEntry))
      setData(json.results);

    };
    fetchData();
  }, []);

  //comprueba la posición y trae un dato nuevo 'superior'
  const handleClick = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <View style={{flex:1, alignItems:'center', alignContent:'center', paddingTop:130}}>
      <TouchableOpacity onPress={handleClick}>
        <Text style={{color:'white',fontSize:25, paddingBottom:60}}>Press me to call an object</Text>
      </TouchableOpacity>
      <Text style={{color:'white',fontSize:30, fontWeight:'bold', paddingBottom:10}}>Random User</Text>

      <Text style={{color:'white',fontSize:20}}>Name: {data[currentIndex].name.first} {data[currentIndex].name.last}{console.log(currentIndex)}</Text>
      <Text style={{color:'white',fontSize:20}}>email: {data[currentIndex].email}{console.log(currentIndex)}</Text>
      <Text style={{color:'white',fontSize:20}}>phone: {data[currentIndex].cell}</Text>
      <Text style={{color:'white',fontSize:20}}>Gender: {data[currentIndex].gender}</Text>
      <Image source={{uri:data[currentIndex].picture.thumbnail}} style={{width:'100%', height:'100%',resizeMode:'center'}}></Image>
    </View>
  );
}




export default CustomButton;
