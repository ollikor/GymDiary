import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import MoveItems from '../../components/MoveItems';
import { TextInput } from 'react-native-gesture-handler';

const moves = ['Benchpress', 'Squat', 'Chinups'];

export default function ExerciseScreen() {
    return (
      <View>
        {
          moves.map((item) => (
            <View>
              <TextInput>{item}</TextInput>
              <MoveItems />
              </View>            
          ))
        }
      </View>
    );
  }