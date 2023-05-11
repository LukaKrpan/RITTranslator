import { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Image,
} from 'react-native';
import { AppContext } from '../AppContextProvider';

import DropDownPicker from 'react-native-dropdown-picker';
export function Settings({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Default', value: '#E9EBFF' },
    { label: 'Blue', value: 'blue' },
    { label: 'Orange', value: 'orange' },
    { label: 'White', value: 'white' },
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: 'Normal', value: 'normal' },
    { label: 'Notoserif', value: 'notoserif' },
    { label: 'Sans-serif', value: 'sans-serif' },
    { label: 'Roboto', value: 'Roboto' },
    { label: 'Sans-serif-light', value: 'sans-serif-light' },
    { label: 'Serif', value: 'serif' },
  ]);
   const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
   { label: 'Black', value: 'black' },
    { label: 'White', value: 'white' },
    { label: 'Orange', value: 'orange' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
  ]);
  const { backgroundColor, setBackgroundColor } = useContext(AppContext);
  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };
  const { fontFamily, setFontFamily } = useContext(AppContext);
  const handleFontFamilyChange = (font) => {
    setFontFamily(font);
  };
  const { textColor, setTextColor } = useContext(AppContext);
  const handleTextColorChange = (color) => {
    setTextColor(color);
  };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.row}>
        <TouchableHighlight onPress={() => navigation.navigate('Main', '')}>
          <Image
            style={styles.image}
            source={require('../media/logo.png')}></Image>
        </TouchableHighlight>

        <View style={styles.row}>
          <Text style={{fontFamily,color: textColor}}>Background:</Text>
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
            onChangeValue={(value) => {
              handleBackgroundColorChange(value);
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={{fontFamily,color: textColor}}>Font:</Text>
          <DropDownPicker
            zIndex={2000}
            zIndexInverse={2000}
            containerStyle={{
              alignItems: 'center',
              width: 150,
            }}
            style={styles.picker}
            open={open2}
            value={value2}
            items={items2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}
            onChangeValue={(value2) => {
              handleFontFamilyChange(value2);
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={{fontFamily,color: textColor}}>Text color:</Text>
          <DropDownPicker
            zIndex={1000}
            zIndexInverse={3000}
            containerStyle={{
              alignItems: 'center',
              width: 150,
            }}
            style={styles.picker}
            open={open3}
            value={value3}
            items={items3}
            setOpen={setOpen3}
            setValue={setValue3}
            setItems={setItems3}
            onChangeValue={(value3) => {
              handleTextColorChange(value3);
            }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  row: {
    alignItems: 'center',
    marginBottom: 60,
  },
  image: {
    height: 100,
    alignItems: 'center',
  },
  picker: {
    width: 120,
  },
});
export default Settings;
