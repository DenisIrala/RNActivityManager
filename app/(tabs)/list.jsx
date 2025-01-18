import { StyleSheet, TextInput, FlatList, View, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect } from 'react';
import {data} from '@/data/todos';

export default function List() {

 /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("dataJSON");
        if (storedData) {
          // Load stored data if it exists
          setDataJSON(JSON.parse(storedData));
        }
        else{
            setDataJSON(JSON.parse("               {'id': 1,              'title': 'test',             'completed': false          }"   ))
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    fetchData();
  }, []);

  const saveData = async (newData) => {
    try {
      await AsyncStorage.setItem("dataJSON", JSON.stringify(newData));
      setDataJSON(newData);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const deleteItem = (id) => {
    const updatedData = dataJSON.filter((item) => item.id !== id);
    saveData(updatedData);
  };

    const data = dataJSON.map((item) => ({
        id: item.id,
        title: item.title,
        completed: item.completed,
      }));
*/

    const [todos, setTodos]=useState(data.sort((a,b)=>b.id - a.id ))

  const toggleComplete = (id) => {
      setTodos(todos.map(todo=>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      ))
   //   console.log("toggle")

    }
  
    const removeTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !==id))
    }

  const renderItem = ({item}) => (
    <View style={styles.item}>
        <Text 
            style={[styles.itemText, item.completed && styles.completedText]}
            onPress={() => toggleComplete(item.id)}
        >
            {item.title}
        </Text>
        <TouchableOpacity onPress = {() => removeTodo(item.id)}>
            <AntDesign name="closecircle" size={24} color="black" />
        </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style ={styles.container}>
      <FlatList data={todos}
        renderItem={renderItem}
        keyExtractor={todo => todo.id}
        contentContainerStyle={{flexGrow: 1}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    completedText:{
        textDecorationLine: 'line-through',
        color: 'gray'
    },
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
    itemText:{
        fontSize: 18,
        color: 'white'
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
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    width: '100%',
    marginHorizontal: 'auto',
    maxWidth: 1024,
    pointerEvents: 'auto'
  },
  button: {
    backgroundColor: '#FFFFF0',
    borderRadius: 5,
    padding: 15,

  },
  buttonText: {
    fontSize: 18,
    color: 'black'
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
