import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function RoundButtonComp({
  label,
  isBlue = false,
  onPress,
  widthX = '100%',
}) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View
        style={{
          width: widthX,
          backgroundColor: isBlue ? 'white' : '#034ef7',
          borderRadius: 30,
          padding: 10,
          marginHorizontal: 5,
          borderColor: 'black',
          borderWidth: isBlue ? 2 : 0,
        }}>
        <Text
          style={{
            color: isBlue ? 'black' : 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
