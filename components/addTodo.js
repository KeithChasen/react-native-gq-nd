import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val)
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo..'
        onChangeText={changeHandler}
      />
      <Button onPress={() => submitHandler(text)} title='Add' color='coral' />
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  }
});