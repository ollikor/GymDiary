import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '../styles/theme'

import Programs from './Programs/Programs';
import History from './History/History';
import Exercise from '../Screens/Exercise/Exercise';
import Timer from '../Screens/Timer/Timer';
import CreateProgram from '../Screens/CreateProgram/CreateProgram';
import Moves from '../Screens/Moves/Moves';
import { Button } from "react-native";

const Tab = createBottomTabNavigator();

const ProgramsStack = createStackNavigator();
const HistoryStack = createStackNavigator();

function HistoryStackScreen() {
    return (
        <HistoryStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primaryBackground,
                },
                headerTitleAlign: 'center',
                headerTintColor: colors.lightText,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <HistoryStack.Screen name='History of training' component={History} />
        </HistoryStack.Navigator>
    );
};

function ProgramsStackScreen() {
    return (
        <ProgramsStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primaryBackground,
                },
                headerTitleAlign: 'center',
                headerTintColor: colors.lightText,
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            }}>
            <ProgramsStack.Screen name='Gym Diary' component={Programs} />
            <ProgramsStack.Screen name='Exercise' component={Exercise} />
            <ProgramsStack.Screen name='Timer' component={Timer} />
            <ProgramsStack.Screen
                name='Create Program' component={CreateProgram} />
            <ProgramsStack.Screen
                // options={({ navigation, route }) => ({
                //     headerRight: () => (
                //         <Button title="Save" />
                //     )
                // })}
                name='Moves' component={Moves} />
        </ProgramsStack.Navigator>
    );
};

export default function Tabs() {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Training' component={ProgramsStackScreen} />
            <Tab.Screen name='History' component={HistoryStackScreen} />
        </Tab.Navigator>
    );
};