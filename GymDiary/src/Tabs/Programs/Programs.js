import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Programs( {navigation} ) {
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
                    style={styles.AddProgramButton}
                ><Text style={styles.AddProgramButtonText}>+</Text></TouchableOpacity>
            </View>
        </View>
    );
}