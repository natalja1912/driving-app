import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { Button, Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { BarChart } from "react-native-chart-kit";

function Statistics({ navigation }) {

  const data = {
    labels: ["Theory", "Practice"],
    legend: ["Theory", "Practice"],
    datasets: [
      {
        data: [20, 50]
      }
    ]
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>Statistics</Text>
        <View style={styles.chart}>
          <BarChart
            data={data}
            width={300}
            height={220}
            yAxisLabel="% "
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForLabels: {
                fontSize: 14,
                color: 'black'
              }
            }}
            hideLegend={false}
            showBarTops={true}
          />
        </View>
        <Text style={styles.text}><FontAwesomeIcon icon={ faCar } /> You can practise both parts of the theory test online.</Text>
        <Text style={styles.text}><FontAwesomeIcon icon={ faCar } />  The practice questions aren’t used in the real test, but they’re based on the same topics as the test.</Text>
        <View style={styles.button}>
          <Button style={styles.button} color="#ffa726" title="Go to HomePage" onPress={() => navigation.navigate('Home')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollView: {
    width: '100%',
    marginHorizontal: 20,
  },
  heading: {
    marginTop: '10px',
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: 24
  },
  chart: {
    marginBottom: '20px',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
  },
  text: {
    marginHorizontal: '10px',
    marginBottom: '10px',
    fontSize: 16
  }
});

export default Statistics;