import React, { useEffect, useState } from 'react';
import { View, SectionList, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors, paddings, fonts } from '../../styles/theme';

export default function Moves({ navigation, route }) {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={styles.Save}
                    onPress={() => {
                        navigation.navigate({
                            name: 'Create Program', params: { moves: moves }, merge: true
                        })
                    }}><Text style={styles.SaveText}>Save</Text></TouchableOpacity>
            )
        })
    });

    const [moves, addMoves] = useState([]);
    const [activeItems, changeActiveItems] = useState([]);

    function handlePress(item, id) {
        const isActive = activeItems.includes(id);
        if (isActive === true) {
            addMoves(prevMoves => prevMoves.filter(item => item.item.id != id));
            changeActiveItems(prevActiveItems => prevActiveItems.filter(itemId => itemId != id));
        } else {
            addMoves([...moves, { item }])
            changeActiveItems([...activeItems, id])
        }
    }

    return (
        <View>
            <SectionList
                sections={[
                    {
                        title: 'Chess',
                        data: [
                            { id: `1`, value: 'Benchpress' }
                        ],
                    },
                    {
                        title: 'Legs',
                        data: [
                            { id: `2`, value: 'Squat' }
                        ],
                    },
                    {
                        title: 'Back',
                        data: [
                            { id: `3`, value: 'Pullup' }
                        ],
                    },
                ]}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => handlePress(item, item.id)}
                    >
                        <View style={styles.ListItemContent}>
                            <Text style={styles.ListItem}>{item.value}</Text>
                            {
                                activeItems.includes(item.id) ?
                                    <Text style={styles.ActiveCheckMark}>V</Text>
                                    : null
                            }
                        </View>
                    </TouchableOpacity>}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.Title}>{section.title}</Text>
                )}
                keyExtractor={item => { item = item.id }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    Save: {
        padding: paddings.sm
    },
    SaveText: {
        color: colors.lightText,
        fontWeight: 'bold'
    },
    Title: {
        padding: paddings.sm,
        fontWeight: 'bold',
        fontSize: fonts.lg,
        color: colors.darkText,
    },
    ListItemContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: paddings.sm,
    },
    ActiveCheckMark: {
        fontSize: fonts.lg,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: colors.primaryBackground
    }
});