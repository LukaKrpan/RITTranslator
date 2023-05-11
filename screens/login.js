import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bcrypt from 'react-native-bcrypt';
import globalStyles from '../components/globalStyles.js';
import { AppContext } from '../AppContextProvider';

export function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usernameRegex = /^[a-zA-Z0-9]{6,}$/;
const passwordRegex = /^[a-zA-Z0-9]{8,}$/;

  const handleClick = async () => {
    if (usernameRegex.test(username) && passwordRegex.test(password)) {
      const hashedPassword = await bcrypt.hashSync(password, 10);
      await AsyncStorage.setItem(username, hashedPassword);
      alert('Account Created');
    }else{
      alert('Invalid data');
    }
  };
  const checkLogin = async () => {
    const hashedPassword = await AsyncStorage.getItem(username);
    if (hashedPassword != null) {
      if (bcrypt.compareSync(password, hashedPassword)) {
        alert('Login successful');
        navigation.navigate('Main', { name: username });
      } else {
        alert('Wrong password');
      }
    } else {
      alert('Wrong username');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../media/logo.png')}></Image>
        <Text>Enter username: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(username) => setUsername(username)}
          value={username}
        />
        <Text>Enter password: </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={checkLogin}>
          <Text style={styles.text}>Log In</Text>
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
    marginTop: '20%',
    width: '30%',
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF5C00',
  },
  text: {
    color: '#FF5C00',
  },
  input: {
    backgroundColor: 'white',
    width: '75%',
    margin: 15,
  },
});
export default Login;
