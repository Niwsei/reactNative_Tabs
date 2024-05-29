import { View, Text  ,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={styles.container}>
    <Link href="/search" style={{backgroundColor:"red" , color:"white" , padding:7 , borderRadius:5 , fontWeight:"600" , fontSize:18}}> Go to index</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})