//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Quiz from './Screens/Quiz';
import CountriesList from './Screens/CountriesList';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ContactPage from './Screens/ContactPage';
import QuizInstructions from './Screens/QuizInstructions';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login Page'
        screenOptions={{          
        headerTintColor:'#0437F2',
        headerStyle:{
          backgroundColor:'#3ED8E2'
        }
      }}
      >
        <Stack.Screen name="Login Page" component={LoginScreen} />
        <Stack.Screen name="Home Page" component={HomeScreen} />
        <Stack.Screen name="Countries List" component={CountriesList} />
        <Stack.Screen name="Quiz instructions page" component={QuizInstructions} />
        <Stack.Screen name="Quiz Page" component={Quiz} /> 
        <Stack.Screen name="Contact page" component={ContactPage} />       
      </Stack.Navigator>
    </NavigationContainer>  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
