import { useState, useContext } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { AppContext } from '../AppContextProvider';
import { FavoritesContext } from '../FavoritesContextProvider';

export function Saved({ navigation }) {
  const { backgroundColor, setBackgroundColor } = useContext(AppContext);
  const { fontFamily, setFontFamily } = useContext(AppContext);
  const { textColor, setTextColor } = useContext(AppContext);
  const { favorites} = useContext(FavoritesContext);
  const {removeFavorite } = useContext(FavoritesContext);

  const handleDelete = (item) => {
    removeFavorite(item);
  };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.row}>
        <TouchableHighlight onPress={() => navigation.navigate('Main', '')}>
          <Image
            style={styles.image}
            source={require('../media/logo.png')}></Image>
        </TouchableHighlight>
      </View>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <View style={styles.favorite}>
              <Text style={[styles.text,{ fontFamily, color: textColor }]}>
                <Text style={styles.bold}>Original Text:</Text>{' '}
                {item.originalText}
              </Text>
              <Text style={[styles.text,{ fontFamily, color: textColor }]}>
                <Text style={styles.bold}>Translated Text:</Text>{' '}
                {item.translatedText}
              </Text>
              <Text style={[styles.text,{ fontFamily, color: textColor }]}>
                <Text style={styles.bold}>From:</Text> {item.from}
              </Text>
              <Text style={[styles.text,{ fontFamily, color: textColor }]}>
                <Text style={styles.bold}>To:</Text> {item.to}
              </Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(item)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
      ) : (
        <Text style={[styles.noFavorites,{ fontFamily, color: textColor }]}>No favorites yet</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  row: {
    alignItems: 'center',
  },
  image: {
    height: 100,
    alignItems: 'center',
  },
  favorite: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  noFavorites: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Saved;
