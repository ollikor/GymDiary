import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import ProgramsScreen from './Programs/ProgramsScreen';
import HistoryScreen from './History/HistoryScreen';
import ExerciseScreen from '../Screens/Exercise/Exercise';

const Tab = createBottomTabNavigator();

const ProgramsStack = createStackNavigator();
const HistoryStack = createStackNavigator();

function ProgramsStackScreen() {
    return(
        <ProgramsStack.Navigator>
            <ProgramsStack.Screen name='Programs' component={ProgramsScreen} />
            <ProgramsStack.Screen name='Exercise' component={ExerciseScreen} />
        </ProgramsStack.Navigator>
    )
}

function HistoryStackScreen() {
    return(
        <HistoryStack.Navigator>
            <HistoryStack.Screen name="History" component={HistoryScreen} />
        </HistoryStack.Navigator>
    );
}

export default function Tabs() {
    return(

            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name='Programs' component={ProgramsStackScreen} />
                <Tab.Screen name='History' component={HistoryStackScreen} />
            </Tab.Navigator>        
    );
}