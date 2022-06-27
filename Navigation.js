import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import RestaurantDetail from "./screens/RestaurantDetail";


export default function Navigation() {
     const Stack = createStackNavigator();

     const screenOption ={
        headerShown: false,
     };

  return (
     <NavigationContainer>

        <Stack.Navigator screenOption={screenOption}>
             <Stack.Screen name="Home" component={Home} />
             <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />

        </Stack.Navigator>

     </NavigationContainer>
  );
}