import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { colors, margins, paddings, elevation, fonts, borderRadius } from '../styles/theme';

import SmallCircleButton from './SmallCircleButton';

export default function MoveItems(props) {

    useEffect(() => {
        setSet([...props.move.sets]);
        // console.log(sets)
    }, []);

    const [sets, setSet] = useState([]);
    const [reps, setReps] = useState({});
    const [weight, setWeight] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    const [activeButton, setActiveButton] = useState('reps');

    function increase(activeButton, id) {

        setSet((prevSet) => {
            return prevSet.map((item) =>
                item.id === id
                    ? activeButton === 'reps'
                        ? { ...item, reps: item.reps + inputValue }
                        : activeButton === 'weight'
                            ? { ...item, weight: item.weight + inputValue }
                            : item
                    : item
            );
        });
    }

    function decrease(activeButton, id) {
        setSet((prevSet) => {
            return prevSet.map((item) =>
                item.id === id
                    ? activeButton === 'reps' && item.reps - inputValue > 0
                        ? { ...item, reps: item.reps - inputValue }
                        : activeButton === 'weight' && item.weight - inputValue > 0
                            ? { ...item, weight: item.weight - inputValue }
                            : item
                    : item
            )
        })
    }

    function addSet() {
        setSet([...sets, { id: Date.now() + Math.random(), reps: 1, weight: 1 }]);
    }

    function removeSet() {
        setSet(prevSet => prevSet.slice(0, -1));
    }

    function handleInputChange(inputValue, inputType, id) {
        // e.preventDefault();
        setSet((prevSet) => {
            return prevSet.map((item) => 
                item.id === id
                    ? inputType === 'reps' && inputValue > 0
                        ? {...item, reps: inputValue, weight: item.weight}
                        :inputType === 'weight' && inputValue > 0
                        ? {...item, reps: item.reps, weight: inputValue}
                        :item
                    :item
            )
        })
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
                activeButton === 'weight' ? setInputValue(0.5) : setInputValue(1)
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
                        style={activeButton === 'weight' ? styles.ActiveContentButtons : styles.ContentButtons}
                        onPress={() => setActiveButton('weight')}
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
            {/* {sets != undefined ? [...Array(sets)].map((_, index) =>  */}
            {sets != undefined ? sets.map((set, index) =>
                <View key={index} style={styles.Content}>
                    <View style={styles.Section1}>
                        <TextInput editable={false}>{index + 1}</TextInput>
                        <TextInput onChangeText={inputValue => handleInputChange(inputValue, 'reps', set.id)}>{set.reps}</TextInput>
                        <TextInput onChangeText={inputValue => handleInputChange(inputValue, 'weight', set.id)}>{set.weight}</TextInput>
                    </View>
                    <View style={styles.Section2}>
                        <View style={styles.Section2Content}>
                            <SmallCircleButton value='+' handlePress={() => increase(activeButton, set.id)} />
                            <SmallCircleButton value='-' handlePress={() => decrease(activeButton, set.id)} />
                        </View>
                    </View>
                </View>,
                console.log('state', sets)
                // ):null}
            ) : null
            }
            <View style={styles.AddSet}>
                <SmallCircleButton
                    value='+'
                    handleLongPress={() => sets.length > 1 ? removeSet() : null}
                    handlePress={() => addSet()}
                />
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
    }
});