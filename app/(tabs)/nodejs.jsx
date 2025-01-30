import { StyleSheet, Image, ImageBackground, Platform } from 'react-native';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function nodejs() {

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
