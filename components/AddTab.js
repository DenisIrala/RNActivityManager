import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { TextInput, Button } from 'react-native-paper';



export default AddTab = ({todos, onAddTodo}) => {
    
   const [text, setText] = useState('')

    const handleAddTab = () => {
        if(text.trim()){
          const newId = todos.length>0 ? todos[0].id+1 : 1;
          onAddTodo({id: newId, title: text, completed: false});
          setText("");
        }
    }


  return (
    <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      mode ='flat'
                      placeholder='Write the todo here'
                      placeholderTextColor="#191970"
                      value={text}
                      onChangeText={setText}
                      testID="input"
                    />
                    <Button onPress={handleAddTab} labelStyle={styles.buttonText} style={styles.button} testID="button">
                      Add
                    </Button>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        flex: 1,
        borderColor: '#C0C0C0',
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
        mode: 'contained',
        backgroundColor: '#FFFFF0',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#191970'
      },
      buttonText: {
        fontSize: 18,
        color: '#191970',
        textAlign: 'center',
        textAlignVertical: 'center'
      },
});