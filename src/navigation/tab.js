import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CashScreen from '../screens/CashScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import ClothesScreen from '../screens/ClothesScreen';
import HomeScreen from '../screens/HomeScreen';
import RemindersScreen from '../screens/RemindersScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cash" component={CashScreen} />
      <Tab.Screen name="Challenge" component={ChallengesScreen} />
      <Tab.Screen name="Clothes" component={ClothesScreen} />
      <Tab.Screen name="Reminder" component={RemindersScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs