  import React, { useState, useEffect } from "react";
  import { View, Text , SafeAreaView, Platform,ScrollView} from 'react-native';
  import Constants from 'expo-constants';
  import HeaderTabs from '../components/home/HeaderTabs';
  import SearchBar from '../components/home/SearchBar';
  import Categories from '../components/home/Categories';
  import { Divider } from "react-native-elements";
  import BottomTabs from "../components/home/BottomTabs";
  import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';


  const YELP_API_KEY = "KgxlkrTw2rlbtBUFEX9Z7lvBZF1GH4vHnbuH0fC7TzBHANWTtWkk4uSoR5R93nIsf1IkekyLTCISg3VaY-X-ZTuneLQ-_jzvJ24hWib265Dc7FH--fAnPi64az64YnYx ";

  export default function Home({ navigation }) {

  const [restaurantData, setRestaurantData] =useState(localRestaurants);
  const [city, setCity ] = useState("New York");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    // const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
            json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);


  return (
    <SafeAreaView style={{backgroundColor:"#eee", flex: 1 }}>
     <View style={{backgroundColor:'white', padding:15, paddingTop:Platform.OS === 'ios' ? 0: Constants.statusBarHeight,}}>
          <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <SearchBar cityHandler={setCity} />
     </View>
    
     <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        {/* <RestaurantItems restaurantData={restaurantData}cityHandler={setCity}/> */}
        <RestaurantItems 
          restaurantData={restaurantData}
          navigation={navigation} 
        />
     </ScrollView>
     <Divider width={1}/>
     <BottomTabs />
    </SafeAreaView>
  );
}

