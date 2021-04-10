import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import Statistics from './src/components/Statistics';
import Checklist from './src/components/Checklist';
import QuestionList from './src/components/QuestionList';
import TestList from './src/components/TestList';
import TrainingList from './src/components/TrainingList';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function App() {
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
