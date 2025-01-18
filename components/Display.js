import { Text } from "react-native";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

export default Display = ({todos, onToggle, onRemove}) => {

      const renderItem = ({item}) => (
        <View style={styles.item} >
            <Text testID={item.id}
                style={[styles.itemText, item.completed && styles.completedText]}
                onPress={() => onToggle(item.id)}
            >
                {item.title}
            </Text>
            <TouchableOpacity onPress = {() => onRemove(item.id)} testID={"delete"+item.id}>
                <AntDesign name="closecircle" size={24} color="black" />
            </TouchableOpacity>
        </View>
      )

  return (
    <FlatList data={todos}
        renderItem={renderItem}
        keyExtractor={todo => todo.id}
        contentContainerStyle={{flexGrow: 1}}/>
  );
};

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
    completedText:{
        textDecorationLine: 'line-through',
        color: 'gray'
    },
    itemText:{
        fontSize: 18,
        color: 'white'
    },
});