import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, fonts, margins, paddings, borderRadius, elevation } from '../styles/theme';

export default function SmallCircleButton(props) {
    return (
        <View style={styles.Container}>
            <Pressable
                style={styles.Button}
                onPress={() => props.handlePress()}
                onLongPress={() => props.handleLongPress()}
            >
                <Text style={styles.ButtonText}>{props.value}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    Button: {
        width: 40,
        height: 40,
        marginLeft: margins.xs,

        padding: paddings.sm,

        borderRadius: borderRadius.lg,
        elevation: elevation.xs,
        backgroundColor: colors.primaryBackground
    },
    ButtonText: {
        lineHeight: fonts.xxl + 5,
        fontSize: fonts.xxxl,
        textAlign: 'center',
        color: colors.lightText,
    },
    Container: {
        alignItems: 'center',
    }
});