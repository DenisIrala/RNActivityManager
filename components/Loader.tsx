import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Loader = (props: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'}/>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center"
     },
})