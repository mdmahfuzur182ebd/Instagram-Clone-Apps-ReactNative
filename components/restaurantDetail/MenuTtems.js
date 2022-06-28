import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch } from "react-redux";

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



const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection:'row',
        justifyContent: "space-between",
        margin: 20,   
    },
    titleStyle: {
      fontSize: 19,
      fontWeight: "600",
  },

});

export default function MenuTtems({restaurantName}) {
  const dispatch = useDispatch();

  const selectItem = (item, checboxValue) =>
    dispatch({
      type:"ADD_TO_CART",
      payload : {
        ...item, 
        restaurantName: restaurantName, 
        checboxValue: checboxValue 
      },
    });

    return (
    <ScrollView showsVerticalScrollIndicator = {false}>
      {foods.map((food, index) => (
        <View key={index}>
            <View style={styles.menuItemStyle}>
            <BouncyCheckbox 
              iconStyle={{ borderColor: "lightgray", borderRadius: 0}}
              fillColor='green'
              onPress={(checboxValue) => selectItem(food, checboxValue) }
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
            <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20 }} />
        </View>      
      ))}
    </ScrollView>
  );
}


const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);


const FoodImage = (props) => (
      <View>
        <Image 
        source={{uri : props.food.image}}
        style={{
           width:180, 
           height: 100, 
           borderRadius:8 ,
          }}
       />
      </View>

);