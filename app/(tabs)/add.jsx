import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { useState, useEffect} from 'react';
import {data} from '@/data/todos';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PageTwo() {
  /*
  const save = async () => {
    try {
      await AsyncStorage.setItem("MyName", text) ;
    } catch(err){
      alert(err)
    }
  }

  const load=  async () => {
    try{
      let name =await AsyncStorage.getItem("MyName")
      if(name !== null) setText(name)
    } catch (err){
      alert(err)
    }
  }
  useEffect(() => {
    const handleFocus = () => {
      // Perform actions when the tab/window gains focus
      load()
      // You can trigger a state update or other actions here
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);
  */
  const data=[];

 //const [data, setData] = useState()
  
  const [text, setText] = useState('')

  const [todos, setTodos]=useState(data.sort((a,b)=>b.id - a.id ))
  const addTodo = () => {
      if(text.trim()){
        const newId = todos.length>0 ? todos[0].id+1 : 1;
        setTodos([{id: newId, title: text, completed: false}, ...todos])
        save()
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
