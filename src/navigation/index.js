import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';
import ResultScreen from '../screens/ResultScreen';
import DetailScreen from '../screens/DetailScreen';
import {GlobalProvider} from '../context/GlobalContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default Navigation;
