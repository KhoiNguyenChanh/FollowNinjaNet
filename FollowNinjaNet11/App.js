import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItems from './components/ToDoItems'
import AddToDo from './components/addToDo';

export default function App() {
  {/* tempdata*/ }
  const [todo, setTodo] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },

  ])
  const pressHandler = (key) => {
    setTodo((prevToDos) => {
      return prevToDos.filter(todo => todo.key != key);
    })
  }
  const submitHandler = (text) => {

    //Alert
    //cách gọi if else đây à :)
    if (text.length > 3) {

      setTodo((prevToDos) => {
        return [
          //biết là generate random keys, but for what tho?
          { text: text, key: Math.random().toString() },
          ...prevToDos
          //...là spread, có nghĩa nó lấy thông tin trên data và 'spread' vào cái mảng mới tạo ở đây
          
        ]
      })
    }
    else {
      //alert('title of alert', 'content of alert')
      Alert.alert('OOOPS!', 'todos must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      //import Keyboard 
      Keyboard.dismiss(); //this method dismiss the keyboard
      console.log('dismissed keyboard')
    }}>
      <View style={styles.container}>
        {/* add comment */}
        {/* header */}
        <Header />

        <View style={styles.content}>
          {/* to do form, this is how you pass the function, by caling the name */}
          <AddToDo submitHandler={submitHandler} />

          <View style={styles.list}>
            {/* flatlist */}
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                //<Text>{item.text}</Text>
                <ToDoItems item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    backgroundColor:'aliceblue',
    flex:1,
    padding: 40,

  },
  list: {
    backgroundColor:'lightgray',
    flex:1,
    marginTop: 20,
  },
});
