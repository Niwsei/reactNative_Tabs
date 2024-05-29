import { Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
  <Tabs screenOptions={{
    tabBarStyle:{
      borderTopWidth: 0,
      padding:0
    },
    tabBarShowLabel: false,
    tabBarActiveTintColor:"red",
    tabBarInactiveTintColor:'#999'
  }}>
    <Tabs.Screen name='index'  options={{tabBarIcon: ({color}) => (
      <Ionicons name='compass' size={28} color={color}/>
    )}}/>

<Tabs.Screen name='search' options={{tabBarIcon: ({color}) => (
      <Ionicons name='search-outline' size={28} color={color}/>
    ) ,  tabBarBadge: 3 }}/>
  </Tabs>
  )
}

export default _layout

