import HomeScreen from './components/start';
import Login from './screens/login';
import About from './screens/about';
import Main from './screens/main';
import Saved from './screens/saved';
import Settings from './screens/settings';
import Translate from './screens/translate';
import { AppContextProvider } from './AppContextProvider';
import { FavoritesContextProvider } from './FavoritesContextProvider';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <AppContextProvider>
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="RitTranslator" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Saved" component={Saved} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Translate" component={Translate} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </AppContextProvider>
  );
}
