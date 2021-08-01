import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import React,{Component} from 'react'

import {NavigationContainer, StackActions} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/home';
import ISSLocationScreen from './screens/ISSLocationScreen';
import MeteorsScreen from './screens/meteorsScreen';



export default function App() {
  return (
    <NavigationContainer>
        
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="IssLocation" component={ISSLocationScreen}/>
        <Stack.Screen name="Meteors" component={MeteorsScreen}/>
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}

const Stack=createStackNavigator()