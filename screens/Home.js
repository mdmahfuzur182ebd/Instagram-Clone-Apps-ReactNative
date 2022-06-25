import React from 'react';
import { View, Text , SafeAreaView} from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import Constants from 'expo-constants';

export default function Home() {
  return (
    <SafeAreaView>
       <HeaderTabs/>
    </SafeAreaView>
  )
}

