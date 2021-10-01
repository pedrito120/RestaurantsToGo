import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen';
import { theme } from './src/infrastructure/theme';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as uselato, Lato_400Regular } from '@expo-google-fonts/lato';



export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = uselato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || ! latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </>

  );
}

