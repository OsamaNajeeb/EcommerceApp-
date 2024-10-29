import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name={'Splash'}
            component={SplashScreen}
            options={{headerShown: false}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
