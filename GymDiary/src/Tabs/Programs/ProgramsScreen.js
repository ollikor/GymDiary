import { View, ScrollView, TouchableOpacity, Text, Alert } from 'react-native';

import styles from './styles';

function addProgram() {

}

export default function ProgramsScreen( {navigation} ) {
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
                    onPress={addProgram}
                    style={styles.AddProgramButton}
                ><Text style={styles.AddProgramButtonText}>+</Text></TouchableOpacity>
            </View>
        </View>
    );
}