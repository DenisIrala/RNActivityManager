import {StatusBar, View, Text, StyleSheet, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import React, { Suspense, useState } from 'react'
import osh from "@/assets/images/osh.jpg"
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultStyles } from '@/styles'
import { Canvas } from '@react-three/fiber/native'
import Model from '@/components/Model.tsx'
import useControls from 'r3f-native-orbitcontrols'
import Trigger from '@/components/Trigger'
import { Loader } from '@/components/Loader'

const app = () => {
  const [OrbitControls, event] = useControls()
  const [loading, setLoading] = useState(false)

  return (
    <SafeAreaView style={[defaultStyles.container, { backgroundColor: 'transparent' }]} >

      <ImageBackground source={osh} style={styles.image}>
        <StatusBar animated barStyle={"light-content"}/>
        <View>
        <Text style={styles.title}>Activity Manager</Text>
        </View>

        <View style={styles.modelContainer} {...event}>
          {loading && <Loader/>}
          <>
        <Canvas> 
              <OrbitControls enablePan={true} enableZoom={false}/>
              <directionalLight position={[1,0,0]} args={['white', 2]} />
              <directionalLight position={[-1,0,1]} args={['white', 2]} />
              <directionalLight position={[1,1,0]} args={['white', 2]} />

              <Suspense fallback={<Trigger setLoading={setLoading}/>}><Model/></Suspense>
        </Canvas>
        </>
        </View>

        <Link href="notabs"  style={{marginHorizontal: 'auto'}} asChild>

        <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}>{"Push to enter hidden page"}</Text>
        </TouchableOpacity>

        </Link>

      </ImageBackground>

    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    modelContainer:{
      flex:1,
      marginTop: 20
    },
    image:{
        flex: 1,
        width: '100%', 
        height: '130%',
        justifyContent: 'center',

    }
    ,
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ADD8E6',
        marginTop: 30, 
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.85)',

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
  }
  ,button:{
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    marginBottom: 100
  },
})

export default app