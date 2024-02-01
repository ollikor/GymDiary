import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { colors, margins, paddings, elevation, fonts, borderRadius } from '../styles/theme';

export default function MoveItems() {
    const [reps, setReps] = useState(0);
    const [kg, setKg] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    const [activeButton, setActiveButton] = useState('reps');

    function increase(value) {
        if (value === 'reps' ? setReps(reps + inputValue) : setKg(kg + inputValue));
    }
    function decrease(value) {
        if (value === 'reps' && reps > 0) {
            setReps(reps - inputValue);
        } else if (value === 'kg' && kg > 0) {
            setKg(kg - inputValue)
        }
    }

    function changeInputValue() {
        switch (inputValue) {
            case 0.5:
                setInputValue(1)
                break;
            case 1:
                setInputValue(10)
                break;
            case 10:
                setInputValue(0.5)
        }
    }

    return (
        <View style={styles.Container}>
            <View style={styles.Content}>
                <View style={styles.Section1}>
                    <Text style={styles.ContentButtons}>Set</Text>
                    <TouchableOpacity
                        style={activeButton === 'reps' ? styles.ActiveContentButtons : styles.ContentButtons}
                        onPress={() => setActiveButton('reps')}
                    >
                        <Text style={styles.ContentButtonsText}>Reps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={activeButton === 'kg' ? styles.ActiveContentButtons : styles.ContentButtons}
                        onPress={() => setActiveButton('kg')}
                    >
                        <Text style={styles.ContentButtonsText}>Kg</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Section2}>
                    <TouchableOpacity
                        style={styles.ActiveContentButtons}
                        onPress={() => changeInputValue()}
                    >
                        <Text style={styles.ContentButtonsText}>{inputValue}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Content}>
                <View style={styles.Section1}>
                    <TextInput editable={false}>0</TextInput>
                    <TextInput>{reps}</TextInput>
                    <TextInput>{kg}</TextInput>
                </View>
                <View style={styles.Section2}>
                    <View style={styles.Section2Content}>
                        <TouchableOpacity
                            style={styles.Section2Button}
                            onPress={() => increase(activeButton)}
                        >
                            <Text style={styles.Section2ButtonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.Section2Button}
                            onPress={() => decrease(activeButton)}
                        >
                            <Text style={styles.Section2ButtonText}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.AddSet}>
                <TouchableOpacity
                    style={styles.Section2Button}
                >
                    <Text style={styles.Section2ButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        margin: margins.lg
    },
    Content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Section1: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: margins.sm
    },
    Section2: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    Section2Content: {
        flexDirection: 'row',
    },
    ActiveButton: {
        backgroundColor: colors.primaryBackground
    },
    ContentButtons: {
        padding: paddings.sm,
        borderRadius: borderRadius.xs,
        color: colors.lightText,
        backgroundColor: colors.secondaryBackground
    },
    ActiveContentButtons: {
        padding: paddings.sm,
        borderRadius: borderRadius.xs,
        color: colors.lightText,
        backgroundColor: colors.primaryBackground
    },
    ContentButtonsText: {
        color: colors.lightText
    },
    Section2Button: {
        width: 40,
        height: 40,
        marginLeft: margins.xs,

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