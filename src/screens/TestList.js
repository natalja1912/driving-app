import * as React from 'react';
import { Button, Text, View } from 'react-native';

function TestList({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{marginBottom: 20, fontSize: 20}}>TestList</Text>
        <Button title="Go to HomePage" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }

  export default TestList;