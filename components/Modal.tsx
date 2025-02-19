import { useCallback, useContext, useMemo, useRef, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BottomSheet, {BottomSheetView, BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet"
import { context, Provider } from "./Context"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Button } from "react-native-paper"

export default function Modal(){
    const sheetRef=useRef<BottomSheetModal>(null);
    const snapPoint = useMemo(() => ['25%', '50%'], []);
    const { text, setText } =useContext(context);
    const [ test, setTest ] =useState("Button");


    const handleSnapPress = useCallback(() =>{
        
        sheetRef.current?.present();
        setText("Success");
        setTest("Success");
    }, [])

    return (
        
        <GestureHandlerRootView >
        <BottomSheetModalProvider>
            <View style={styles.container}>
            <Button onPress={()=>{
                    handleSnapPress()}
        }><Text>{test+" "+text}</Text>
                </Button>
            <BottomSheetModal
                ref={sheetRef}
                index={0}
                snapPoints={snapPoint}
                enablePanDownToClose={true}
                >
                <BottomSheetView style={styles.contentContainer}>
                    <Text>{text}</Text>
                </BottomSheetView>
            </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
        </GestureHandlerRootView>

    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
  });