import { SafeAreaView, SectionList, Text, StyleSheet, View, } from 'react-native';

import { colors, paddings, fonts, margins } from '../../styles/theme';

export default function History() {

    const moves = {
        benchpress: { sets: [{ id: Date.now() + Math.random(), reps: 2, weight: 60 }, { id: Date.now() + Math.random(), reps: 5, weight: 80 }] },
        squat: { sets: [{ id: Date.now() + Math.random(), reps: 3, weight: 80 }] },
        deadlift: { sets: [{ id: Date.now() + Math.random(), reps: 3, weight: 100 }] },
    };

    const movesArray = Object.keys(moves).map((move) => ({
        title: move,
        data: moves[move].sets
    }));

    return (
        <SafeAreaView style={styles.Container}>
            <SectionList
                sections={movesArray}
                keyExtractor={(item, index) => item.id.toString() + index}
                renderItem={({ item, index }) => (
                    <View style={styles.ListItem}>
                        <Text style={styles.ListItemTitle}>{index + 1}. set </Text>
                        <Text>{item.reps} reps - {item.weight} kg</Text>
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <View>
                        <Text style={styles.Title}>{section.title}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container: {
        padding: paddings.lg
    },  
    Title: {
        marginTop: margins.sm,
        fontSize: fonts.lg,
        color: colors.darkText,
    },
    ListItem: {
        flexDirection: 'row',
        marginTop: margins.sm
    },
    ListItemTitle: {
        fontWeight: 'bold'
    }
});