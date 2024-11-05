import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

export default function Listener() {
  const [user, setUser] = useState();
  console.log('user: ', user);

  useEffect(() => {
    const subScribe = auth().onAuthStateChanged(user => {
      setUser(user);
    });
    return subScribe; // Unsubscribe on unmount
  }, []); // Empty dependency array to ensure this only runs once
}
