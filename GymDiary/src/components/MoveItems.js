import { StyleSheet, ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { colors, margins, paddings, elevation, fonts, borderRadius } from '../styles/theme';

export default function MoveItems() {
    return (
        <ScrollView>
            <View style={styles.Container}>
                <View style={styles.Section1}>
                    <Text style={styles.ContentButtons}>Set</Text>
                    <TouchableOpacity style={styles.ContentButtons}>
                        <Text  style={styles.ContentButtonsText}>Reps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ContentButtons}>
                        <Text style={styles.ContentButtonsText}>Kg</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Section2}>
                    <TouchableOpacity style={styles.ContentButtons}>
                        <Text style={styles.ContentButtonsText}>10</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Container}>
                <View style={styles.Section1}>
                    <TextInput>1</TextInput>
                    <TextInput>0</TextInput>
                    <TextInput>0</TextInput>
                </View>
                <View style={styles.Section2}>
                    <View style={styles.Section2Content}>
                        <TouchableOpacity style={styles.Section2Button}>
                            <Text style={styles.Section2ButtonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Section2Button}>
                            <Text style={styles.Section2ButtonText}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.AddSet}>
                <TouchableOpacity style={styles.Section2Button}>
                    <Text style={styles.Section2ButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        paddingLeft: paddings.md,
        paddingRight: paddings.md,
        paddingTop: paddings.sm
    },
    Section1: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Section2: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    Section2Content: {
        flexDirection: 'row',
    },
    ContentButtons: {
        padding: paddings.sm,
        borderRadius: borderRadius.xs,
        color: colors.lightText,
        backgroundColor: colors.secondaryBackground
    },
    ContentButtonsText: {
        color: colors.lightText
    },
    Section2Button: {
        marginLeft: margins.xs,
        width: 40,
        height: 40,

        padding: paddings.sm,

        borderRadius: borderRadius.lg,
        elevation: elevation.xs,
        backgroundColor: colors.primaryBackground
    },
    Section2ButtonText: {
        lineHeight: fonts.xxl + 5,
        fontSize: fonts.xxxl,
        textAlign: 'center',
        color: colors.lightText,
    },
    AddSet: {
        margin: margins.sm,
        alignItems: 'center',
    }
});