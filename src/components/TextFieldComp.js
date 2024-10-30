import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function TextFieldComp({
  placeHolderT,
  KeyBoardT = 'default',
  isSecure = false,
}) {
  return (
    <View
      style={{
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
        padding: 5,
        backgroundColor: 'white',
        marginVertical: 10,
      }}>
      <TextInput
        placeholder={placeHolderT}
        keyboardType={KeyBoardT}
        secureTextEntry={isSecure}
      />
    </View>
  );
}
