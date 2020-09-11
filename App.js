import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const clearHandler = () => {
    setName('');
    setAge('');
  };

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder='Name'
        onChangeText={(val) => setName(val)}
        value={name}
      />
      <Text>Enter age:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Age'
        onChangeText={(val) => setAge(val)}
        value={age}
      />
      <Text>My name is {name}</Text>
      <Text>My age is {age}</Text>
        <View style={styles.buttonContainer}>
          <Button title='Clear' onPress={clearHandler} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
