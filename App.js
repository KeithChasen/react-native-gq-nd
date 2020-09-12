import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Kostya', id: 1},
    {name: 'Keith', id: 2},
    {name: 'John', id: 3},
    {name: 'Jack', id: 4},
    {name: 'Shaun', id: 5},
    {name: 'Paul', id: 6},
    {name: 'Kevin', id: 7},
    {name: 'Marshal', id: 8},
  ]);

  const pressHandler = id => {
    const updatedPeople = people.filter(person => person.id !== id);
    setPeople(updatedPeople)
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.person}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
    fontSize: 24,
    marginHorizontal: 10,
  }
});
