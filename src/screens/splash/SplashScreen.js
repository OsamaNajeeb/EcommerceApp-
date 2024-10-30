import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('SignIn');
  }, 1000);
  return (
    <ImageBackground
      source={require('../../../assets/splashbg.jpg')}
      resizeMode={'cover'}
      style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.text}>Ecommerce App</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 15,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});
