import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors, paddings, fonts, elevation } from '../../styles/theme';

export default function Programs({ navigation }) {
    return (
        <View>
            <ScrollView style={styles.ProgramsScrollView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Exercise')}>
                    <Text>Benchpress</Text>
                </TouchableOpacity>
            </ScrollView>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Create Program')}
                    style={styles.FloatingButton}>
                    <Text style={styles.FloatingButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ProgramsScrollView: {
        height: '100%'
    },
    FloatingButton: {
        position: 'absolute',
        right: paddings.sm,
        bottom: paddings.sm,

        justifyContent: 'center',
        alignItems: 'center',

        width: 60,
        height: 60,

        borderRadius: 30,
        elevation: elevation.sm,
        backgroundColor: colors.primaryBackground,
    },
    FloatingButtonText: {
        lineHeight: fonts.plusButton + 5,
        fontSize: fonts.plusButton,
        color: colors.tertiaryBackground
    }
});