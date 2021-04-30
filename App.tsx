import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
      </NavigationContainer>
  )
}
