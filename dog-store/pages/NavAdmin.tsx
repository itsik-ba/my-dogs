import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Women from './Women';
import Admin from './Admin';
import Man from './Man';

const Tab = createBottomTabNavigator();

const NavAdmin = () => {

  return (
    <Tab.Navigator>
    <Tab.Screen name="Admin" component={Admin} />
    <Tab.Screen name="Man" component={Man} />
    <Tab.Screen name="Women" component={Women} />
  </Tab.Navigator>
  )
}

export default NavAdmin