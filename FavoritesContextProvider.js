import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const FavoritesContext = createContext();

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (translation) => {
    const newFavorite = { id: uuidv4(), ...translation };
    setFavorites([...favorites, newFavorite]);
  };

  const removeFavorite = (item) => {
    const newFavorites = favorites.filter((f) => f.id !== item.id);
    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {props.children}
    </FavoritesContext.Provider>
  );
}