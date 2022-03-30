import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import FilmsStack from './filmsStack'
import RecentStack from './recentStack'
import Favorite from '../../screens/favorite'

const BottomTab = createBottomTabNavigator()
Icon.loadFont()

const ProtectedStack = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name='Movie_Database'
        options={{
          tabBarLabel: 'Most popular movie',
          tabBarIcon: ({ color, size }) => (
            <Icon name='film' color={color} size={size} />
          )
        }}
        component={FilmsStack}
      />
      <BottomTab.Screen
        name='Most_recent'
        options={{
          tabBarLabel: 'Most recent',
          tabBarIcon: ({ color, size }) => (
            <Icon name='calendar' color={color} size={size} />
          )
        }}
        component={RecentStack}
      />
      <BottomTab.Screen
        name='Favorites'
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Icon name='heart' color={color} size={size} />
          )
        }}
        component={Favorite}
      />
    </BottomTab.Navigator>
  )
}

export default ProtectedStack
