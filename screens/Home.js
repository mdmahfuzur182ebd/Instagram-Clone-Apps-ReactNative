import React from 'react';
import { View, Text , SafeAreaView, Platform} from 'react-native';
import Constants from 'expo-constants';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

export default function Home() {

  return (
    <SafeAreaView style={{backgroundColor:"#eee", flex: 1 }}>
     <View style={{backgroundColor:'white', padding:15, paddingTop:Platform.OS === 'ios' ? 0: Constants.statusBarHeight,}}>
          <HeaderTabs/>
          <SearchBar/>
     </View>
     <Categories/>

    </SafeAreaView>
  );
}

