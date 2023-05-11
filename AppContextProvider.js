import React, { createContext, useState } from 'react';

export const AppContext = createContext({
  backgroundColor: '#E9EBFF',
  setBackgroundColor: () => {},
  fontFamily: 'normal',
  setFontFamily: () => {},
  textColor: 'black',
  setTextColor: () => {},
  width:'100%'
});

export const AppContextProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('#E9EBFF');

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };
  const [fontFamily, setFontFamily] = useState('arial');
  const handleFontFamilyChange = (font) => {
    setFontFamily(font);
  };
  const [textColor, setTextColor] = useState('black');
  const handleTextColorChange = (color) => {
    setTextColor(color);
  };
  return (
    <AppContext.Provider
      value={{
        backgroundColor,
        setBackgroundColor: handleBackgroundColorChange,
        fontFamily,
        setFontFamily: handleFontFamilyChange,textColor,
        setTextColor: handleTextColorChange
      }}>
      {children}
    </AppContext.Provider>
  );
};
