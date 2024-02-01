import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import Programs from './Programs/Programs';
import History from './History/History';
import Exercise from '../Screens/Exercise/Exercise';
import CreateProgram from '../Screens/CreateProgram/CreateProgram';

const Tab = createBottomTabNavigator();

const ProgramsStack = createStackNavigator();
const HistoryStack = createStackNavigator();

function ProgramsStackScreen() {
    return(
        <ProgramsStack.Navigator>
            <ProgramsStack.Screen name='Programs' component={Programs} />
            <ProgramsStack.Screen name='Exercise' component={Exercise} />
            <ProgramsStack.Screen name='Create Program' component={CreateProgram} />
        </ProgramsStack.Navigator>
    )
}

export default function Tabs() {
    return(

            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name='Training' component={ProgramsStackScreen} />
                <Tab.Screen name='History' component={History} />
            </Tab.Navigator>        
    );
}