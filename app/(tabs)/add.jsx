import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { useState, useEffect} from 'react';
import {data} from '@/data/todos';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PageTwo() {
  /*
  const [dataJSON, setDataJSON] = useState([]);

  // Fetch data from AsyncStorage or initialize with the JSON file
  useEffect(() => {

    try {
      AsyncStorage.clear();
      console.log('All data cleared!');
    } catch (error) {
      console.error('Error clearing all data:', error);
    }

    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("dataJSON");
        if (storedData) {
          // Load stored data if it exists
          setDataJSON(JSON.parse(storedData));
        } else {
          // Save the initial JSON data to AsyncStorage
          await AsyncStorage.setItem("dataJSON", JSON.stringify(initialData));
          setDataJSON(initialData);
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

  const data = dataJSON.map((item) => ({
    id: item.id,
    title: item.title,
    completed: item.completed,
  }));
  */
  
  const [text, setText] = useState('')

  const [todos, setTodos]=useState(data.sort((a,b)=>b.id - a.id ))
  const addTodo = () => {
      if(text.trim()){
        const newId = todos.length>0 ? todos[0].id+1 : 1;
        setTodos([{id: newId, title: text, completed: false}, ...todos])
        setText('')
      }
    }
  

  return (
    <SafeAreaView style ={styles.container}>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Write the todo here'
            placeholderTextColor="white"
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity onPress={addTodo} style={styles.button}>
            <Text styles={styles.buttonText}>Add</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
  

const styles = StyleSheet.create({
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
