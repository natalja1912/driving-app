import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import HomeScreen from './src/screens/HomeScreen';
import Statistics from './src/screens/Statistics';
import Checklist from './src/screens/Checklist';
import QuestionList from './src/screens/QuestionList';
import TestList from './src/screens/TestList';
import TrainingList from './src/screens/TrainingList';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function App() {
  const [loaded] = useFonts({
    'Mulish-Bold': require('./assets/fonts/Mulish-Bold.ttf'),
    'Mulish-Regular': require('./assets/fonts/Mulish-Regular.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HomeScreen} screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="Checklist" component={Checklist} />
        <Stack.Screen name="TrainingList" component={TrainingList} />
        <Stack.Screen name="QuestionList" component={QuestionList} />
        <Stack.Screen name="TestList" component={TestList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
