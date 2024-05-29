import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View style={styles.container}>
      <Link href="/" style={{backgroundColor:"red" , color:"white" , padding:7 , borderRadius:5 , marginBottom:18 , fontWeight:"600" , fontSize:18}}> Go to index</Link>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "black",
    }
  })