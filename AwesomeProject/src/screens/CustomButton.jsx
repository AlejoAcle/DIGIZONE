
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import axios from 'axios';

const CustomButton = () => {
  const [users, setUsers] = useState([]);

  const handleButtonPress = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    setUsers(response.data.results);
  };

  useEffect(() => {
    handleButtonPress();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={handleButtonPress}>
        <Text>Cargar usuarios</Text>
      </TouchableOpacity>
      {users.map((user) => (
        <Text key={user.id.value}>{user.name.first}</Text>
      ))}

    </View>
  );
};


export default CustomButton;