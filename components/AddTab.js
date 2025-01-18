import { Text } from "react-native";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";


export default AddTab = ({todos, onAddTodo}) => {
    
   const [text, setText] = useState('')

    const handleAddTab = () => {
        if(text.trim()){
          const newId = todos.length>0 ? todos[0].id+1 : 1;
          onAddTodo({id: newId, title: text, completed: false});
        }
    }


  return (
    <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder='Write the todo here'
                      placeholderTextColor="white"
                      value={text}
                      onChangeText={setText}
                      testID="input"
                    />
                    <TouchableOpacity onPress={handleAddTab} style={styles.button} testID="button">
                      <Text styles={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});