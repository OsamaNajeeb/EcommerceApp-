import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/splash/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './screens/auth/SignIn';
import SignUpScreen from './screens/auth/SignUp';
import LoginScreen from './screens/auth/LoginIn';
import HomeScreen from './screens/HomeScreen';
import Listener from './screens/auth/Listener';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <Listener />
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <stack.Screen
            name={'Splash'}
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <stack.Screen
            name={'SignIn'}
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <stack.Screen
            name={'SignUp'}
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <stack.Screen
            name={'Login'}
            component={LoginScreen}
            options={{headerShown: false}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
