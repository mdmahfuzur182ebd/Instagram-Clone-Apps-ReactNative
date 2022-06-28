import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuTtems from '../components/restaurantDetail/MenuTtems';
import ViewCart from '../components/restaurantDetail/ViewCart';




export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical:20 }} />
      <MenuTtems />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  )
}