import {View, Text, Image, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import RoundButtonComp from '../../src/components/RoundButtonComp';

export default function SignInScreen() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#297B6D'} />
      <View style={{flex: 0.5}}>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={require('../../assets/signinbg.jpg')}
        />
      </View>
      <View style={{flex: 0.5, backgroundColor: '#297B6D'}}>
        <Text style={[stylesOne.head, stylesOne.align]}>Hello</Text>
        <Text style={stylesOne.align}>Weclome to Ecommerce Application</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'center',
            borderRadius: 30,
          }}>
          <RoundButtonComp />
        </View>
      </View>
    </View>
  );
}
//#034ef7
const stylesOne = StyleSheet.create({
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  align: {
    textAlign: 'center',
    color: 'white',
  },
});
