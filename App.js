import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Kostya', key: 1},
    {name: 'Keith', key: 2},
    {name: 'John', key: 3},
    {name: 'Jack', key: 4},
    {name: 'Shaun', key: 5},
    {name: 'Paul', key: 6},
    {name: 'Kevin', key: 7},
    {name: 'Marshal', key: 8},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          people.map(person =>
            (
              <Text
                style={styles.person}
                key={person.key}
              >
                {person.name}
              </Text>
            )
          )
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  person: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24

  }
});
