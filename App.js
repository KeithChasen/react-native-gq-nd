import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [list, setList] = useState([
    { text: 'Learn React Native', id: 1 },
    { text: 'Learn GraphQL', id: 2 },
    { text: 'Make an awesome project', id: 3 },
  ]);

  const pressHandler = (id) => {
    setList(prevList => prevList.filter(item => item.id !== id))
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setList(prevList => ([
        ...prevList,
        {
          text: text,
          id: Math.random().toString()
        }
      ]))
    } else {
      Alert.alert('Whoops!', 'Text should be over 3 characters long', [
        { text: 'Ok', onPress: () => console.log('button pressed')}
      ])
    }

  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            keyExtractor = { (item) => item.id }
          data={list}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
