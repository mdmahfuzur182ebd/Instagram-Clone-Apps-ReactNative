import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuTtems from '../components/restaurantDetail/MenuTtems';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods =[
       {
        title: "Lasagna",
        description:"With butter Lettuce, tomato and sauce bechamel",
        price:"$13.50",
        image :
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",

       },
       {
        title: "Tandoori Chicken",
        description:"Amazing Bangladesh dish with tenderloin chicken off the sizzels ",
        price:"$19.20",
        image :
         "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",

       },

       {
        title: "Chilaquiles",
        description:"Chilaquiles with cheese and sauce. A delicious mesican dish",
        price:"$14.50",
        image :
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
       },
       {
        title: "Chilaquiles",
        description:"Chilaquiles with cheese and sauce. A delicious mesican dish",
        price:"$14.50",
        image :
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
       },
       {
        title: "Chilaquiles",
        description:"Chilaquiles with cheese and sauce. A delicious mesican dish",
        price:"$14.50",
        image :
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
       },
       {
        title: "Chilaquiles",
        description:"Chilaquiles with cheese and sauce. A delicious mesican dish",
        price:"$14.50",
        image :
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
       },

];



export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical:20 }} />
      <MenuTtems  restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  )
}