import { StyleSheet, ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { colors, paddings } from '../styles/theme';

export default function MoveItems() {
    return (
        <ScrollView>

        <View style={styles.Container}>
            <View style={styles.Content}>

                <Text style={styles.ContainerButtons}>Set</Text>
                <TouchableOpacity style={styles.ContainerButtons}><Text>Reps</Text></TouchableOpacity>
                <TouchableOpacity style={styles.ContainerButtons}><Text>Kg</Text></TouchableOpacity>
                <TouchableOpacity style={styles.ContainerButtons}><Text>1</Text></TouchableOpacity>
            </View>
        </View>
            <View style={styles.Content}>
                <TextInput>1</TextInput>
                <TextInput>0</TextInput>
                <TextInput>0</TextInput>
                <TouchableOpacity><Text>+</Text></TouchableOpacity><TouchableOpacity><Text>-</Text></TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',

        padding: paddings.md,
    },
    Content: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around'
        // alignItems: 'center'

    },
    ContainerButtons: {
        padding: paddings.sm,
        borderRadius: 5,
        color: colors.lightText,
        backgroundColor: colors.secondaryBackground
    }
});