import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function CreateProgram() {
    return (
      <View>
        <TextInput placeholder='Program name'></TextInput>
      </View>
    );
  }