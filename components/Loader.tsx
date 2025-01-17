import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center"
     },
})

export default Loader
