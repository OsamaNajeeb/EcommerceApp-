import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ImageBtnComp({image, widthX, heighZ, onPress}) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View
        style={{
          marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3,
          width: 40,
          height: 40,
        }}>
        <Image
          source={image}
          style={{
            width: widthX,
            height: heighZ,
            resizeMode: 'contain',
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
