import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors, paddings, fonts } from '../../styles/theme';
import { useState } from 'react';

export default function Timer({ navigation }) {

    const [timer, setTimer] = useState(120000);

    let timeInterval;

    function handleTimer() {
        timeInterval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer > 0) {
                    return prevTimer - 1000;
                } else {
                    clearInterval(timeInterval);
                    navigation.goBack();
                }
            });
        }, 1000);
    };

    return (
        <View style={styles.Container}>
            <TextInput
                editable={false}
                selectTextOnFocus={true}
                keyboardType='numeric'
                style={styles.Time}
                >
                {timer != undefined ? timer < 60000 ? (timer / 1000): (timer / 60000).toFixed(2):0}
            </TextInput>
            <TouchableOpacity
                onPress={() => handleTimer()}
                style={styles.StartButton}>
                <Text style={styles.StartButtonText}>Start</Text>
            </TouchableOpacity>
            <View style={styles.TimeButtonsContainer}>
                <TouchableOpacity
                    onPress={() => setTimer(30000)}
                    style={styles.TimeButton}>
                    <Text style={styles.TimeButtonText}>30s</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setTimer(60000)}
                    style={styles.TimeButton}>
                    <Text style={styles.TimeButtonText}>1min</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setTimer(120000)}
                    style={styles.TimeButton}>
                    <Text style={styles.TimeButtonText}>2min</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setTimer(300000)}
                    style={styles.TimeButton}>
                    <Text style={styles.TimeButtonText}>5min</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        alignItems: 'center',
    },
    Time: {
        fontSize: fonts.xxxl,
        color: colors.darkText
    },
    StartButton: {
        width: 200,
        padding: paddings.lg,
        alignItems: 'center',
        backgroundColor: colors.primaryBackground
    },
    StartButtonText: {
        color: colors.lightText,
        fontSize: fonts.lg
    },
    TimeButtonsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

        margin: 20,
    },
    TimeButton: {
        width: 80,
        padding: paddings.sm,
        alignItems: 'center',
        backgroundColor: colors.primaryBackground,

    },
    TimeButtonText: {
        color: colors.lightText
    },
});