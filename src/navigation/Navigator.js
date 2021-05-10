import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'

Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
    >
      <Stack.Screen
        name="Login"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitle: 'Login',
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator;

