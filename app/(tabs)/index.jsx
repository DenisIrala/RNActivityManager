import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import osh from "@/assets/images/osh.png"
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultStyles } from '@/styles'

const app = () => {
  return (
    <SafeAreaView style={defaultStyles.container}>
      <ImageBackground source={osh} resizeMode="stretch" style={styles.image}>
      <Text style={styles.title}>Champion Displayer</Text>
      <Link href="notabs" style={{marginHorizontal: 'auto'}} asChild><Pressable style={styles.button}><text style={styles.buttonText}>Explore</text></Pressable></Link>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
    width: 150,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
    marginBottom: 50,

  }
})

export default app