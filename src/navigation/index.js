import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import MapView from '../screens/MapView';

const Stack = createStackNavigator();

const Navigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MapView"
          component={MapView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
