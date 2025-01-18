import { StyleSheet, TextInput, FlatList, View, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {data} from '@/data/todos';
import AddTab from '@/components/AddTab';
import Display from '@/components/Display'

export default function List() {

  const [todos, setTodos]=useState(data.sort((a,b)=>b.id - a.id ))

  const toggleComplete = (id) => {
      setTodos(todos.map(todo=>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      ))
   //   console.log("toggle")
    }
  
  const handleAddTodo = (newTodo) => {
      setTodos([newTodo, ...todos]);
    };

  const removeTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !==id))
  }


  return (
    <SafeAreaView style ={styles.container}>
      <AddTab todos={todos} onAddTodo={handleAddTodo}/>
      <Display todos={todos} onToggle={toggleComplete} onRemove={removeTodo}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        padding: 10,
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 1,
        width: '100%',
        maxWidth: 1024,
        marginHorizontal: 'auto',
        pointerEvents: 'auto'
    },
    
  container: {
    flex:1,
    backgroundColor: '#191970'
  },
  input: {
    flex: 1,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    fontSize: 18,
    minWidth: 0,
    color: 'white'
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  image:{
    width: '100%', 
    height: '100%',
    justifyContent: 'center'
}
});
