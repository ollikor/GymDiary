import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

export default function CreateProgram({ navigation, route }) {

    const [sets, addSet] = useState(1);
    const [moves, addMoves] = useState([]);


    return (
        <View>
            <TextInput placeholder='Program name'></TextInput>
            <TouchableOpacity onPress={() => navigation.navigate('Moves')}>
                <Text>Add moves</Text>
            </TouchableOpacity>
            {route.params?.moves != undefined ?
                <FlatList
                    data={route.params?.moves}
                    renderItem={({ item }) =>
                        <Text>{item.item.value}</Text>
                    }
                    keyExtractor={item => item.item.id}
                /> : null}
        </View>
    );
};