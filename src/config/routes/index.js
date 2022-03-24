import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FlashMessage from 'react-native-flash-message'

import LoginStack from './loginStack'
import ProtectedStack from './protectedStack'

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='LoginStack' component={LoginStack} /> */}
        <Stack.Screen name='ProtectedStack' component={ProtectedStack} />
      </Stack.Navigator>
      <FlashMessage position='top' />
    </NavigationContainer>
  )
}

export default Routes
