import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RestaurantScreen } from '../../features/restaurants/screens/restaurant.screen'
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen'

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen name="RestaurantDetails" component={RestaurantDetailScreen} />
    </RestaurantStack.Navigator>
  )
}
//screenOptions={{headerShown: false}}
