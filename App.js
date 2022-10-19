
// import {  View } from 'react-native';
// import SignUpScreen from './src/screens/SignUpScreen';
// import { s } from "react-native-wind";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './src/screens/LoginScreen';
// import Clothes from './src/screens/ClothesScreen';
import MyTabs from './src/navigation/tab';
import OnboardingScreen from './src/screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    // <View style={s`py-10`}>
    //   <SignUpScreen />
    // </View>
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} /> */}
        {/* <Stack.Screen options={{headerShown: false}} name="Sign Up" component={SignUpScreen} /> */}
        <Stack.Screen options={{headerShown: false}} name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen options={{headerShown: false}} name="Tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//       padding: '2em'
//   }
// })

