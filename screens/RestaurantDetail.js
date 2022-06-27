import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuTtems from '../components/restaurantDetail/MenuTtems';



export default function RestaurantDetail({ route }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical:20 }} />
      <MenuTtems />
    </View>
  )
}