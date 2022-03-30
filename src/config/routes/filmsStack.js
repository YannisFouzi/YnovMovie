import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Films from '../../screens/films'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const FilmsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Movies' component={Films} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default FilmsStack
