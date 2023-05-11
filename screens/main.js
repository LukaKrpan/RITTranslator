import { useState,useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import globalStyles from '../components/globalStyles.js';
import {AppContext} from '../AppContextProvider';

export function Main({ route, navigation }) {
  const { name } = route.params;
  const { backgroundColor, setBackgroundColor } = useContext(AppContext);
 const { fontFamily, setFontFamily } = useContext(AppContext);
  const { textColor, setTextColor } = useContext(AppContext);
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../media/logo.png')}></Image>

        <Image
          style={styles.icon}
          source={require('../media/icon.png')}></Image>
        <Text style={styles.text}>{JSON.stringify(name)}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Translate')}>
          <Text style={styles.text}>Translate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Saved')}>
          <Text style={styles.text}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('About')}>
          <Text style={styles.text}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sign}
          onPress={() => navigation.navigate('RitTranslator')}>
          <Text style={styles.text}>Sign Out</Text>
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
  image: {
    height: 100,
    alignItems: 'center',
  },
  button: {
    marginTop: '10%',
    width: '40%',
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF5C00',
  },
  sign: {
    marginTop: '5%',
    width: '40%',
    padding: 15,
    alignItems: 'center',
  },
  text: {
    color: '#FF5C00',
  },
  icon: {
    height: 80,
    width: 80,
  },
});
export default Main;
