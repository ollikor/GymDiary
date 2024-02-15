import { ScrollView, View, TextInput, StyleSheet } from 'react-native';
import { colors, margins, paddings, elevation, fonts, borderRadius } from '../../styles/theme';

import MoveItems from '../../components/MoveItems';

const moves = {
  // benchpress: { sets: [{ reps: 3, weight: 60},{reps: 5, weight: 80 }]},
  benchpress: { sets: [{ id: Date.now() + Math.random(), reps: 2, weight: 60 }, { id: Date.now() + Math.random(), reps: 5, weight: 80 }]},
  squat: { sets: [{ id: Date.now() + Math.random(), reps: 3, weight: 80}]},
  deadlift: { sets: [{ id: Date.now() + Math.random(), reps: 3, weight: 100 }]},
};

export default function ExerciseScreen() {
  return (
    <ScrollView>
      {
       Object.keys(moves).map((item, index) => (
          <View key={index} style={styles.Container}>
            <TextInput style={styles.TextInput}>{item}</TextInput>
            <MoveItems move={moves[item]} />
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