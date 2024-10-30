import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function FullRoundBtnComp({image, bg, widthX, heighZ}) {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: bg,
          borderRadius: 25,
          marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3,
          width: 50,
          height: 50,
          borderColor: 'black',
          borderWidth: 2,
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
