import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors, fonts, margins, paddings, borderRadius, elevation } from '../styles/theme';

export default function SmallCircleButton(props) {
    return (
        <View style={styles.AddSet}>
            <TouchableOpacity
                style={styles.Section2Button}
                onPress={() => props.handlePress()}
            >
                <Text style={styles.Section2ButtonText}>{props.value}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
        alignItems: 'center',
    }
});