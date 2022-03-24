import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Films from '../../screens/characters'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const CharactersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Films' component={Films} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default CharactersStack
