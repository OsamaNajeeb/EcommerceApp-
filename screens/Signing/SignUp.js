import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import TextFieldComp from '../../src/components/TextFieldComp';
import RoundButtonComp from '../../src/components/RoundButtonComp';

export default function SignUpScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#297B6D', padding: 15}}>
      <StatusBar backgroundColor={'#297B6D'} />
      <Text style={[stylesOne.head, stylesOne.align]}>Sign Up</Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TextFieldComp
          placeHolderT={'Enter Email'}
          KeyBoardT={'email-address'}
        />
        <TextFieldComp placeHolderT={'Enter Password'} isSecure={true} />
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <RoundButtonComp label={'Sign Up'} isBlue={false} widthX={100} />
          <RoundButtonComp label={'Cancel'} isBlue={true} widthX={100} />
        </View>
      </View>
    </View>
  );
}

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
