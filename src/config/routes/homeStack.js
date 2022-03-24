import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../screens/home'
import Settings from '../../screens/settings'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Home'
        component={Home}
      />
      <Stack.Screen name='Settings' component={Settings} />
    </Stack.Navigator>
  )
}

export default HomeStack
