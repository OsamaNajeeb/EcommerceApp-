import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

export default function HomeScreen({navigation}) {
  const OnSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        navigation.replace('SignIn');
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#297B6D'}}>
      <StatusBar backgroundColor={'#d68492'}></StatusBar>
      <View
        style={{
          flex: 0.08,
          flexDirection: 'column',
          backgroundColor: '#d68492',
        }}>
        <Button
          title="Logout"
          backgroundColor={'white'}
          onPress={OnSignOut}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
