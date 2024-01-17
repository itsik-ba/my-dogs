import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Women from './Dogs';
import Admin from './Admin';


const Tab = createBottomTabNavigator();

const NavAdmin = () => {

  return (
    <Tab.Navigator>
    <Tab.Screen name="Admin" component={Admin} />
    <Tab.Screen name="Women" component={Women} />
  </Tab.Navigator>
  )
}

export default NavAdmin