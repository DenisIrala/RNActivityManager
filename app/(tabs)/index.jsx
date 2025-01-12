import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import osh from "@/assets/images/osh.png"
import { Link } from 'expo-router'

const app = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={osh} resizeMode="stretch" style={styles.image}>
      <Text style={styles.title}>XDDD</Text>
      <Link href="/explore" style={{marginHorizontal: 'auto'}} asChild><Pressable style={styles.button}><text style={styles.buttonText}>Explore</text></Pressable></Link>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',

    }
    ,
    image:{
        width: '100%', 
        height: '100%',
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: 'center'
    }
    ,
    title:{
        color:'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginBottom: 120,
    },
    link:{
        color:'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        padding: 4,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    buttonText:{
      color:'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 4,
  }
  ,button:{
    justifyContent:'center',
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
  }
})

export default app