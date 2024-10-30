import {View, Text, Image, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import RoundButtonComp from '../../src/components/RoundButtonComp';
import FullRoundBtnComp from '../../src/components/FullRoundBtnComp';

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
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <RoundButtonComp label={'Login'} isBlue={false} />
          <RoundButtonComp label={'Sign Up'} isBlue={true} />
        </View>
        <View
          style={{
            marginTop: 10,
            justifyContent: 'flex-end',
            paddingBottom: 20,
            flex: 1,
          }}>
          <Text style={{color: 'white', textAlign: 'center', marginTop: 30}}>
            Connect through other platform
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <FullRoundBtnComp
              image={require('../../assets/gaggle.png')}
              bg={'white'}
              widthX={30}
              heighZ={30}
            />
            <FullRoundBtnComp
              image={require('../../assets/facebook.png')}
              bg={'#3566A5'}
              widthX={40}
              heighZ={40}
            />
            <FullRoundBtnComp
              image={require('../../assets/xitter.png')}
              bg={'white'}
              widthX={25}
              heighZ={25}
            />
          </View>
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
