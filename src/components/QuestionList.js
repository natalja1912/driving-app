import * as React from 'react';
import { Button, Text, View } from 'react-native';

function QuestionList({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>QuestionList Screen</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }

  export default QuestionList;