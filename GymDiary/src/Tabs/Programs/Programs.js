import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

function addProgram() {

}

export default function Programs() {
    return (
        <View>
            <ScrollView style={styles.ProgramsScrollView}>
            </ScrollView>
            <View>
                <TouchableOpacity
                    onPress={addProgram}
                    style={styles.AddProgramButton}
                ><Text style={styles.AddProgramButtonText}>+</Text></TouchableOpacity>
            </View>
        </View>
    );
}