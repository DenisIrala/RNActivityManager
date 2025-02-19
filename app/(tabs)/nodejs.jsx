import { StyleSheet, Image, ImageBackground, Platform, ScrollView, Pressable} from 'react-native';
import { useEffect, useState, useRef, useContext } from 'react';
import { View, Text, FlatList, TextInput, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import Modal from '@/components/Modal';
import { context, Provider } from '@/components/Context';

const URL='https://f91b-50-172-117-195.ngrok-free.app';

export default function nodejs() {
/*
  const [mangas, setMangas]=useState();

  useEffect(()=>{
    fetchData();
  },[])

  async function fetchData(){
    const response = await fetch('http://localhost:8080/getList');
    const data = await response.json();

    
    setMangas(data);

  }

  return (
    <SafeAreaView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      >
        <Text style={styles.text}>Welcome to the not so secret page!</Text>
        <Text style={styles.text}>{JSON.stringify(mangas, null, 2)}</Text>
    </SafeAreaView>
  );
}
  

const styles = StyleSheet.create({
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
},
  text:{
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  }
});
*/

const [users, setUsers] = useState([]);
const [newName, setNewName] = useState('');
const [newEmail, setNewEmail] = useState('');
const [loading, setLoading] = useState(false); // Add a loading state
const [deletingUserId, setDeletingUserId] = useState(null); // Track which user is being deleted
const listRef=useRef(null);
const { text } =useContext(context);


useEffect(() => {
  fetchUsers(); // Fetch users on component mount
}, []);

const fetchUsers = async () => {
  try {
      const response = await axios.get(URL+'/users',{
        headers: {
          'User-Agent': "asd", // Customize this
        },
      });
      setUsers(response.data);
  } catch (error) {
      console.error('Error fetching users:', error);
      Alert.alert('Error', 'Failed to fetch users. Please check your network connection and backend server.'); // More user-friendly error message
  }
};

const addUser = async () => {
  if (!newName || !newEmail) {
      Alert.alert('Error', 'Please enter both name and email.');
      return;
  }

  setLoading(true); // Set loading to true
  try {
      const response = await axios.post(URL+'/addUser', {
          name: newName,
          email: newEmail,
          headers: {
            'User-Agent': "asd", // Customize this
          },
      });


     setUsers([...users, response.data]);

      setNewName(''); // Clear input fields
      setNewEmail('');
      Alert.alert('Success', 'User added successfully!');

  } catch (error) {
      console.error('Error adding user:', error);
      Alert.alert('Error', 'Failed to add user. Please check your network connection and backend server.');
  } finally {
      setLoading(false); // Set loading to false, regardless of success or failure
  }
};

const renderUser = ({ item }) => (
  <View style={styles.userItem}><Text style={styles.userText}>{item.name}</Text><Text style={styles.userText}>{item.email}</Text><Button
                title={deletingUserId === item._id ? "Deleting..." : "Delete"}
                onPress={() => deleteUser(item._id)}
                disabled={deletingUserId === item._id} 
                color="red" 
            /></View>
);

const deleteUser = async (id) => {
  Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this user?",
      [
          {
              text: "Cancel",
              style: "cancel"
          },
          {
              text: "OK",
              onPress: async () => {
                  setDeletingUserId(id); // Set the ID of the user being deleted
                  try {
                      await axios.delete(URL+`/users/${id}`);
                      fetchUsers(); // Refresh the user list
                      Alert.alert('Success', 'User deleted successfully!');
                  } catch (error) {
                      console.error('Error deleting user:', error);
                      Alert.alert('Error', 'Failed to delete user. Please check your network connection and backend server.');
                  } finally {
                      setDeletingUserId(null); // Reset deletingUserId
                  }
              }
          }
      ]
  );
};

const scrollToBottom = () => {
  if (listRef.current) {
    listRef.current.scrollToEnd({ animated: true });
  }
};

return (
  <View style={styles.container}>
    <Text style={styles.title}>{text}</Text>
      <Text style={styles.title}>Users</Text>
      <TextInput
          style={styles.input}
          placeholder="Name"
          value={newName}
          onChangeText={setNewName}
      />
      <TextInput
          style={styles.input}
          placeholder="Email"
          value={newEmail}
          onChangeText={setNewEmail}
          keyboardType="email-address" // Show email keyboard
      />
      <Pressable   style={({ pressed }) => [ // Style based on press state
          styles.button,
          pressed && styles.buttonPressed, // Apply extra styles when pressed
        ]}
        onPress={() => {
          addUser();
        }}
         ><Text style={styles.buttonText}>{loading ? "Adding..." : "Add User"}</Text></Pressable>  
      
      {users.length > 0 && (<><Pressable 
          style={({ pressed }) => [ // Style based on press state
          styles.button,
          pressed && styles.buttonPressed, // Apply extra styles when pressed
        ]}
         onPress={scrollToBottom}><Text style={styles.buttonText}>Scroll to Bottom</Text></Pressable>      
    <FlatList
        ref={listRef}
        data={users}
        renderItem={renderUser}
        keyExtractor={(item) => item._id} // Make sure this is present!
    />
</>)}
    <Provider>
        <Modal/>
    </Provider>
  </View>
  
);
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  userItem: {
        flexDirection: 'row', // Make items arrange horizontally
        alignItems: 'center', // Vertically center content
        
        justifyContent: 'space-between', // Distribute space between name/email and button
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#444',
        marginBottom: 5,
        borderRadius: 5,
    },
  userText: {
      color: 'white',
  },
  input: {
      backgroundColor: '#555', // Darker background for input
      color: 'white', // White text in input
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
  },
  button:{
    backgroundColor: 'teal',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 3, // Android shadow
    justifyContent: 'center',
    alignItems: 'center', 
    margin: 10
  },
  buttonPressed: {
    opacity: 0.7, // Slightly reduce opacity when pressed
    backgroundColor: 'skyblue'  // Change background on press
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
