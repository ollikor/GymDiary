import { ScrollView, View, TextInput, StyleSheet } from 'react-native';
import { colors, margins, paddings, elevation, fonts, borderRadius } from '../../styles/theme';

import MoveItems from '../../components/MoveItems';

const moves = ['benchpress', 'Squat', 'Chinups', 'pullups'];

export default function ExerciseScreen() {
  return (
    <ScrollView>
      {
        moves.map((item, index) => (
          <View key={index} style={styles.Container}>
            <TextInput style={styles.TextInput}>{item}</TextInput>
            <MoveItems />
          </View>
        ))
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginBottom: margins.xl,
    elevation: elevation.sm,
    backgroundColor: colors.tertiaryBackground,
  },
  TextInput: {
    width: '100%',
    textAlign: 'center',
    fontSize: fonts.lg
  }
});