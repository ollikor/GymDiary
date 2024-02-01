import { View, TextInput } from 'react-native';

import PlusButton from '../../components/SmallCircleButton';

export default function CreateProgram() {
    return (
      <View>
        <TextInput placeholder='Program name'></TextInput>
        <PlusButton />
      </View>
    );
  }