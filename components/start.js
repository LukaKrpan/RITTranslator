import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

export default function RitTranslator({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require('../media/logo.png')}></Image>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9EBFF',
    height: '100%',
  },
  row: {
    alignItems: 'center',
  },
  button: {
    marginTop: '80%',
    width: '30%',
    backgroundColor: 'white',
    margin: 15,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF5C00',
  },
  text: {
    color: '#FF5C00',
  },
});
