import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen'
import { theme } from './src/infraestructure/theme/index'
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import {RestaurantcontextProvider} from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from './src/services/locations/location.context'
import { Navigation } from './src/infraestructure/navigation'
//import { RestaurantRequest } from './src/services/restaurants/restaurants.service';
//import { Ionicons } from '@expo/vertor-icons';

//const Tab = createBottomTabNavigator();
/*
const iconosTabs = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
}*/

//const Settings = () => <Text>Settings</Text>;
//const Maps = () => <Text>Maps</Text>;
/*
const createScreenOptions = ({ route }) => {
  const iconName = iconosTabs[route.name];
  return {
      tabBarIcon: ({size, color}) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    tabBarActiveTintColor: '#1a9af7',
    tabBarInactiveTintColor: 'gray',
  }
}*/

export default function App () {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })
  const [latoLoaded] = useLato({
    Lato_400Regular
  })
  if (!oswaldLoaded || !latoLoaded) {
    return null
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantcontextProvider>
            <Navigation />
          </RestaurantcontextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  )
}
