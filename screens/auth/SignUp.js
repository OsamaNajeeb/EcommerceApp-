import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import TextFieldComp from '../../src/components/TextFieldComp';
import RoundButtonComp from '../../src/components/RoundButtonComp';
import auth from '@react-native-firebase/auth';

export default function SignUpScreen({navigation}) {
  const [eMail, setEmail] = useState('');
  const [password, setPass] = useState('');

  const onRegister = () => {
    auth()
      .createUserWithEmailAndPassword(eMail, password)
      .then(() => {
        Alert.alert('User account created successfully');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#297B6D', padding: 15}}>
      <StatusBar backgroundColor={'#297B6D'} />
      <Text style={[stylesOne.head, stylesOne.align]}>Sign Up</Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={textFieldStyle.textF}>
          <TextInput
            placeholder="Enter Email"
            keyboardType="email-address"
            value={eMail}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={textFieldStyle.textF}>
          <TextInput
            placeholder="Enter Password"
            value={password}
            secureTextEntry={true}
            onChangeText={value => setPass(value)}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <RoundButtonComp
            label={'Sign Up'}
            isBlue={false}
            widthX={100}
            onPress={() => onRegister()}
          />
          <RoundButtonComp
            label={'Cancel'}
            isBlue={true}
            widthX={100}
            onPress={() => navigation.goBack()}
          />
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

const textFieldStyle = StyleSheet.create({
  textF: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    padding: 5,
    backgroundColor: 'white',
    marginVertical: 10,
  },
});
