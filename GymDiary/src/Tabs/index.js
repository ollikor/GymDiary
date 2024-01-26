import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Programs from './Programs/Programs';
import History from './History/History';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Programs" component={Programs} />
            <Tab.Screen name="History" component={History} />
        </Tab.Navigator>        
    );
}