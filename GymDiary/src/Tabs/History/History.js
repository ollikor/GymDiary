import { View, Text } from 'react-native';

export default function History() {

  const moves = {
    benchpress: { sets: [{ id: Date.now() + Math.random(), reps: 2, weight: 60 }, { id: Date.now() + Math.random(), reps: 5, weight: 80 }] },
    squat: { sets: [{ id: Date.now() + Math.random(), reps: 3, weight: 80 }] },
    deadlift: { sets: [{ id: Date.now() + Math.random(), reps: 3, weight: 100 }] },
  };

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>History</Text>
      </View>
    );
  };