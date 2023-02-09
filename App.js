import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import Stack from './Navigation/Stack'
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer >

    </>
  )
}

export default App