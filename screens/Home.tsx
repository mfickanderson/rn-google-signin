import { Link } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import database from '@react-native-firebase/database';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  // const reference = firebase
  // .app()
  // .database('https://<databaseName>.<region>.firebasedatabase.app/')
  // .ref('/mandy');
database()
  .ref('/Mandy/0')
  .on('value', snapshot => {
    console.log('User data: ', snapshot.val());
  });
  return (
    <View style={styles.container}>
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
