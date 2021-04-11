import * as React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, Button } from "react-native";
import CheckboxItem from '../components/CheckBoxComponent';

function Checklist({ navigation }) {

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>Checklist</Text>
        <CheckboxItem textLabel={'Get enough practice.'}></CheckboxItem>
        <CheckboxItem textLabel={'Learn the basics.'}></CheckboxItem>
        <CheckboxItem textLabel={'Ask for help.'}></CheckboxItem>
        <CheckboxItem textLabel={'Pass the test.'}></CheckboxItem>
        <Button title="Go to HomePage" onPress={() => navigation.navigate('Home')} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Checklist;


const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  scrollView: {
    marginHorizontal: 20,
  }
});