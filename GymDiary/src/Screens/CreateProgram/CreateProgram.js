import React, { useState, useEffect } from 'react';
import { View, TextInput,TouchableOpacity, Text } from 'react-native';

import PlusButton from '../../components/SmallCircleButton';
import { useFocusEffect } from '@react-navigation/native';
// import MoveItems from '../../components/MoveItems';
// import Moves from '../Moves/Moves';

export default function CreateProgram({navigation, route}) {
  
  const [sets, addSet] = useState(1);
  const [moves, addMoves] = useState([]);


  return (
    <View>
      <TextInput placeholder='Program name'></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate('Moves')}>
        <Text>Add moves</Text>
      </TouchableOpacity>
      {console.log(route.params?.moves)}
      {route.params?.moves != undefined ? route.params?.moves.map(item => <Text>{item.name}</Text>):null}
      <PlusButton value={'+'} handlePress={() => addSet(sets + 1)} />
    </View>
  );
}