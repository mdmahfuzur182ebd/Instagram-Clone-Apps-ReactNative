import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function Navigation() {
     const stack = createStackNavigator();

     const screenOption ={
        headerShown: false,
     }

  return (
     <NavigationContainer/>
  )
}