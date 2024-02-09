import { ScrollView, View, TextInput, StyleSheet } from 'react-native';
import { colors, margins, paddings, elevation, fonts, borderRadius } from '../../styles/theme';

import MoveItems from '../../components/MoveItems';

const moves = {
  benchpress: { sets: 3, reps: 3, weight: 60 },
  squat: { sets: 2, reps: 3, weight: 80 },
  deadlift: { sets: 3, reps: 3, weight: 100 },
};

export default function ExerciseScreen() {
  return (
    <ScrollView>
      {
        Object.keys(moves).map((item, index) => (
          <View key={index} style={styles.Container}>
            <TextInput style={styles.TextInput}>{item}</TextInput>
            <MoveItems reps={moves[item].reps} weight={moves[item].weight} />
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