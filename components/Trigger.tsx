import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

type Props = {

    setLoading:React.Dispatch<React.SetStateAction<boolean>>;

}

const Trigger = ({setLoading}: Props) => {
   const [isLoading, setIsLoading] = useState(false); 

    useEffect(() => {
      setIsLoading(true);
      return () => {
        setIsLoading(false);
      }
    }, [setLoading])
    

  return (
    isLoading && <Text>Loading</Text> 
  )
}

export default Trigger