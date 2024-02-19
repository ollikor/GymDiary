import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import PlusButton from '../../components/SmallCircleButton';

export default function CreateProgram({ navigation, route }) {

    const [sets, addSet] = useState(1);
    const [moves, addMoves] = useState([]);


    return (
        <View>
            <TextInput placeholder='Program name'></TextInput>
            <TouchableOpacity onPress={() => navigation.navigate('Moves')}>
                <Text>Add moves</Text>
            </TouchableOpacity>
            {console.log(route.params?.moves)}
            {
                route.params?.moves != undefined ? route.params?.moves.map((item, index) =>
                    <Text key={index}>{item.item.value}</Text>
                ) : null
            }
            <PlusButton value={'+'} handlePress={() => addSet(sets + 1)} />
        </View>
    );
};