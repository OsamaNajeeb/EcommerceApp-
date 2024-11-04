import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {View, Text} from 'react-native';
import React from 'react';

export const _signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId:
        '613318674448-7inedvuopb98jcqhbkl2bb2difdaodoc.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth().signInWithCredential(googleCredential);
    return userInfo;
  } catch (error) {
    console.log('Google Sign In', error);
    return null;
  }
};
