import * as React from 'react';
import { Button, Text, View } from 'react-native';

function QuestionList({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{marginBottom: 20, fontSize: 20}}>QuestionList</Text>
        <Button title="Go to HomePage" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }

  export default QuestionList;