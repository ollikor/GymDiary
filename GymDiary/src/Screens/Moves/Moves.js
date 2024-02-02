import React, { useState, onBackPress, useEffect  } from 'react';
import { View, SectionList, TouchableOpacity ,Button, Text, StyleSheet, BackHandler } from 'react-native';
import { useFocusEffect,  } from '@react-navigation/native';

import { colors, margins, paddings, elevation, fonts, borderRadius } from '../../styles/theme';

export default function Moves({navigation, route}) {
    
    const [moves, addMoves] = useState([]);

    return (
        <View>
            <SectionList
                sections={[
                    {
                        title: 'Chess',
                        data: [
                            'Benchpress',
                        ],
                    },
                    {
                        title: 'Legs',
                        data: [
                            'Squat',
                        ],
                    },
                    {
                        title: 'Back',
                        data: [
                            'Pullups'
                        ],
                    },
                ]}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => {
                        addMoves([...moves, { id: new Date().toDateString(), name: item }],
                        )
                    }}
                    >
                        <Text style={styles.ListItem}>{item}</Text>
                    </TouchableOpacity>}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.Title}>{section.title}</Text>
                )}
                keyExtractor={item => {item}}
            />
            <Button title='Done' onPress={() => {navigation.navigate({
                name: 'Create Program', params: {moves: moves}, merge: true
            })}} />
        </View>
    );
}

const styles = StyleSheet.create({
    Title: {
        padding: paddings.sm,
        fontWeight: 'bold',
        fontSize: fonts.lg,
        color: colors.darkText,
    },
    ListItem: {
        padding: paddings.sm
    }
});