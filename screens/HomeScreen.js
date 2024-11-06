import React from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import ImageBtnComp from '../src/components/ImageBtnComp';

export default function HomeScreen({navigation}) {
  const OnSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        navigation.replace('SignIn');
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#297B6D'}}>
      <StatusBar backgroundColor={'#d68492'} />
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={20}
            color="#888"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
            keyboardType="web-search"
          />
        </View>
        <ImageBtnComp
          image={require('../assets/logout.png')}
          widthX={40}
          heighZ={40}
          onPress={OnSignOut}
        />
      </View>
      {/* Additional content */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.08,
    flexDirection: 'row',
    backgroundColor: '#d68492',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    paddingVertical: 3,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    color: '#333',
  },
});
