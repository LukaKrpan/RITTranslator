import { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';
import { translateText } from './deepL';
import globalStyles from '../components/globalStyles.js';
import DropDownPicker from 'react-native-dropdown-picker';
import { AppContext } from '../AppContextProvider';
import { FavoritesContext } from '../FavoritesContextProvider';

export function Translate({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Bulgarian', value: 'BG' },
    { label: 'Czech', value: 'CS' },
    { label: 'Danish', value: 'DA' },
    { label: 'German', value: 'DE' },
    { label: 'Greek', value: 'EL' },
    { label: 'English', value: 'EN' },
    { label: 'Spanish', value: 'ES' },
    { label: 'Estonian', value: 'ET' },
    { label: 'Finnish', value: 'FI' },
    { label: 'French', value: 'FR' },
    { label: 'Hungarian', value: 'HU' },
    { label: 'Indonesian', value: 'ID' },
    { label: 'Italian', value: 'IT' },
    { label: 'Japanese', value: 'JA' },
    { label: 'Korean', value: 'KO' },
    { label: 'Lithuanian', value: 'LT' },
    { label: 'Latvian', value: 'LV' },
    { label: 'Norwegian', value: 'NB' },
    { label: 'Dutch', value: 'NL' },
    { label: 'Polish', value: 'PL' },
    { label: 'Portuguese', value: 'PT' },
    { label: 'Romanian', value: 'RO' },
    { label: 'Russian', value: 'RU' },
    { label: 'Slovak', value: 'SK' },
    { label: 'Slovenian', value: 'SL' },
    { label: 'Swedish', value: 'SV' },
    { label: 'Turkish', value: 'TR' },
    { label: 'Ukrainian', value: 'UK' },
    { label: 'Chinese', value: 'ZH' },
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: 'Bulgarian', value: 'BG' },
    { label: 'Czech', value: 'CS' },
    { label: 'Danish', value: 'DA' },
    { label: 'German', value: 'DE' },
    { label: 'Greek', value: 'EL' },
    { label: 'English', value: 'EN' },
    { label: 'Spanish', value: 'ES' },
    { label: 'Estonian', value: 'ET' },
    { label: 'Finnish', value: 'FI' },
    { label: 'French', value: 'FR' },
    { label: 'Hungarian', value: 'HU' },
    { label: 'Indonesian', value: 'ID' },
    { label: 'Italian', value: 'IT' },
    { label: 'Japanese', value: 'JA' },
    { label: 'Korean', value: 'KO' },
    { label: 'Lithuanian', value: 'LT' },
    { label: 'Latvian', value: 'LV' },
    { label: 'Norwegian (Bokmål)', value: 'NB' },
    { label: 'Dutch', value: 'NL' },
    { label: 'Polish', value: 'PL' },
    { label: 'Portuguese', value: 'PT' },
    { label: 'Romanian', value: 'RO' },
    { label: 'Russian', value: 'RU' },
    { label: 'Slovak', value: 'SK' },
    { label: 'Slovenian', value: 'SL' },
    { label: 'Swedish', value: 'SV' },
    { label: 'Turkish', value: 'TR' },
    { label: 'Ukrainian', value: 'UK' },
    { label: 'Chinese', value: 'ZH' },
  ]);
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const handleTranslate = async () => {
    const result = await translateText(text, value, value2);
    setText2(result);
  };
  const { backgroundColor, setBackgroundColor } = useContext(AppContext);
  const { fontFamily, setFontFamily } = useContext(AppContext);
  const { textColor, setTextColor } = useContext(AppContext);
  const { favorites, addFavorite } = useContext(FavoritesContext);
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    setIsSaved(false);
  }, [text2]);
  const handleSaveFavorite = () => {
    if (!isSaved) {
      addFavorite({
        originalText: text,
        translatedText: text2,
        from: value,
        to: value2,
      });
      setIsSaved(true);
    }
  };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.row}>
        <TouchableHighlight onPress={() => navigation.navigate('Main', '')}>
          <Image
            style={styles.image}
            source={require('../media/logo.png')}></Image>
        </TouchableHighlight>{' '}
        <Text style={{ fontFamily, color: textColor }}>Select language:</Text>
        <DropDownPicker
          zIndex={3000}
          zIndexInverse={1000}
          containerStyle={{
            alignItems: 'center',
            width: 200,
          }}
          style={styles.picker}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <TextInput
          style={[styles.input, styles.border]}
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Text style={{ fontFamily, color: textColor }}>
          Select second language:
        </Text>
        <DropDownPicker
          zIndex={2000}
          zIndexInverse={2000}
          containerStyle={{
            alignItems: 'center',
            width: 200,
          }}
          style={styles.picker}
          open={open2}
          value={value2}
          items={items2}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
        />
        <TextInput
          style={[styles.input, styles.border]}
          onChangeText={(text2) => setText2(text2)}
          value={text2}
          editable={false}
        />
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={handleTranslate}>
          <Text style={styles.text}>Translate</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={handleSaveFavorite}>
          <Text style={styles.text}>
            {isSaved ? 'Saved' : 'Save to Favorite'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
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
  row: {
    alignItems: 'center',
  },
  image: {
    height: 100,
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '75%',
    margin: 15,
    color: 'black',
    paddingLeft: 5,
  },
  text: {
    color: '#FF5C00',
  },
  border: {
    borderWidth: 1,
  },
});
export default Translate;
