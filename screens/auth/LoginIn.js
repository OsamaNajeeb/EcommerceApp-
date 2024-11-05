import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import RoundButtonComp from '../../src/components/RoundButtonComp';
import auth from '@react-native-firebase/auth';

export default function LoginScreen({navigation}) {
  const [eMail, setEmail] = useState('');
  const [password, setPass] = useState('');

  const onLogin = () => {
    auth()
      .signInWithEmailAndPassword(eMail, password)
      .then(() => {
        // Show success alert
        Alert.alert('Login Successful', 'User logged in successfully', [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        } else {
          Alert.alert('Error', error.message);
        }
        console.error(error);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#297B6D', padding: 15}}>
      <StatusBar backgroundColor={'#297B6D'} />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={[stylesOne.head, stylesOne.align]}>Login</Text>
        <View style={textFieldStyle.textF}>
          <TextInput
            placeholder="Enter Email"
            keyboardType="email-address"
            value={eMail}
            onChangeText={setEmail}
          />
        </View>
        <View style={textFieldStyle.textF}>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry
            value={password}
            onChangeText={setPass}
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
            label={'Login'}
            isBlue={false}
            widthX={100}
            onPress={onLogin}
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
    marginVertical: 30,
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
