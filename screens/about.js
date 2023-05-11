import { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Image,
} from 'react-native';
import globalStyles from '../components/globalStyles.js';
import { AppContext } from '../AppContextProvider';

export function About({ navigation }) {
  const { backgroundColor, setBackgroundColor } = useContext(AppContext);
  const { fontFamily, setFontFamily } = useContext(AppContext);
  const { textColor, setTextColor } = useContext(AppContext);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.row}>
        <TouchableHighlight onPress={() => navigation.navigate('Main', '')}>
          <Image
            style={styles.image}
            source={require('../media/logo.png')}></Image>
        </TouchableHighlight>

        <Text style={{ fontFamily, color: textColor }}>About</Text>

        <Image
          style={styles.me}
          source={require('../media/me.jpeg')}
          resizeMode="contain"></Image>

        <Text style={[styles.padding, { fontFamily, color: textColor }]}>
          <Text style={{ fontFamily, color: textColor }}>Author: </Text>Luka
          Krpan
        </Text>
        <Text style={[styles.width, { fontFamily, color: textColor }]}>
          This application is designed to help students and other people
          increase their language skills. RIT Translator thrives on helping
          others and making good applications.
        </Text>
        <Text style={[styles.padding, { fontFamily, color: textColor }]}>
          For information visit www.rittranslator.com
        </Text>
        <Text style={[styles.padding, { fontFamily, color: textColor }]}>
          Version 1.0.
        </Text>
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
  image: {
    height: 100,
    alignItems: 'center',
  },
  me: {
    marginTop: 15,
    height: 300,
    width: 350,
  },
  padding: {
    marginTop: 35,
  },
  width: {
    marginTop: 35,
    width: '80%',
  },
});
export default About;
