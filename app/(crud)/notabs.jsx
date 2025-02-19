import { StyleSheet, Image, ImageBackground, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { View, Text } from 'react-native';
import { context, Provider } from '@/components/Context';
import Modal from '@/components/Modal';
import { useContext, useRef } from 'react';
import { Button } from "react-native-paper"



export default function PageTwo() {
  const { text } =useContext(context);
  const ref=useRef(null);
  return (
    <View style={{
      flex: 1,
    }}>
      <Text style={styles.text}>Welcome to the secret page!</Text>
      <Button onPress={()=>{
                    ref.current?.handleSnapPress()}
        }><Text>Test</Text>
                </Button>
      <Provider>
        <Modal ref={ref}/>
      </Provider>
    </View>
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
}
,text:{
    fontSize: 50,
    color: '#ffffff',
    textAlign: 'center',

}
});
