import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// Uncomment these imports if you intend to use the components
// import TextFieldComp from '../../src/components/TextFieldComp';
// import RoundButtonComp from '../../src/components/RoundButtonComp';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function SignUpScreen() {
  GoogleSignin.configure({
    webClientId:
      '613318674448-7inedvuopb98jcqhbkl2bb2difdaodoc.apps.googleusercontent.com',
  });

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const onRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const OnLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Login Success');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-credential') {
          Alert.alert('Wrong Password');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const OnLogout = () => {
    auth()
      .signOut()
      .then(() => Alert.alert('User signed out!'))
      .catch(error => {
        console.error(error);
      });
  };

  const OnGoogleSign = async () => {
    try {
      // await GoogleSignin.clearCachedAccessToken(idToken);
      // await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();

      if (!idToken) {
        throw new Error('No ID token found');
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);

      Alert.alert('Google Sign-In Success!');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      Alert.alert('Google Sign-In failed. Please try again.');
    }
  };

  const [user, setUser] = useState();
  console.log('user : ', user);

  const onAuth = user => setUser(user);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuth);
    return subscriber;
  });

  return (
    <View style={{flex: 1, backgroundColor: '#297B6D', padding: 15}}>
      <StatusBar backgroundColor={'#297B6D'} />
      <Text style={[stylesOne.head, stylesOne.align]}>Sign Up</Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {/* Uncomment if you intend to use these components */}
        {/* <TextFieldComp
          placeHolderT={'Enter Email'}
          KeyBoardT={'email-address'}
        />
        <TextFieldComp placeHolderT={'Enter Password'} isSecure={true} /> */}
        <TextInput
          placeholder="Email"
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: 'white',
          }}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          placeholder="Password"
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: 'white',
          }}
          value={password}
          onChangeText={value => setPass(value)}
          secureTextEntry={false}
        />
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <TouchableOpacity
            onPress={onRegister}
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: 'gold',
              width: 50,
            }}>
            <View>
              <Text>Sign Up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={OnLogin}
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: 'gold',
              width: 50,
            }}>
            <View>
              <Text>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={OnLogout}
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: 'gold',
              width: 50,
            }}>
            <View>
              <Text>Sign Out</Text>
            </View>
          </TouchableOpacity>
          {/* Uncomment if you intend to use these components */}
          {/* <RoundButtonComp label={'Sign Up'} isBlue={false} widthX={100} />
          <RoundButtonComp label={'Cancel'} isBlue={true} widthX={100} /> */}
        </View>
        <View>
          <TouchableOpacity onPress={OnGoogleSign}>
            <View>
              <Image
                source={require('../../assets/gaggle.png')}
                style={{
                  width: 100,
                  height: 300,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </TouchableOpacity>
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
