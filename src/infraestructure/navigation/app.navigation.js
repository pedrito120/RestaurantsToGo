import React from "react";
import { RestaurantScreen } from '../../features/restaurants/screens/restaurant.screen'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native'
import { RestaurantsNavigator } from './restaurants.navigator'

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {

  const Settings = () => <Text>Settings</Text>;
  const Maps = () => <Text>Maps</Text>;

  const iconosTabs = {
    Restaurants: "restaurant",
    Map: "map",
    Settings: "settings",
  }

  const createScreenOptions = ({ route }) => {
    const iconName = iconosTabs[route.name];
    return {
      tabBarIcon: ({size, color}) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      tabBarActiveTintColor: '#1a9af7',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    }
  }

  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
      >
        <Tab.Screen name="Restaurantes" component={RestaurantsNavigator}/>
        <Tab.Screen name="Map" component={Maps}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
