import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function RoundButtonComp({label, isBlue = false}) {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: 100,
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
