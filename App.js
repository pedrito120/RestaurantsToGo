import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen';
import { theme } from './src/infrastructure/theme';
import { Ionicons,Feather  } from '@expo/vector-icons';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as uselato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Setting = () => <Text>Settings</Text>;
const Maps = () =>  <Text>Map</Text>;
const Tab = createBottomTabNavigator();
export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = uselato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Restaurants') {
                  iconName = focused
                    ? 'restaurant'
                    : 'restaurant-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings' : 'settings';
                }else if (route.name === 'Maps') {
                  iconName = focused ? 'map' : 'map-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
      >
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Maps" component={Maps} />
            <Tab.Screen name="Settings" component={Setting} />
          </Tab.Navigator>
        </NavigationContainer>
        {/* <RestaurantScreen /> */}
      </ThemeProvider>
    </>

  );
}

