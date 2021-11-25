import React, { createContext, useEffect, useState, useContext } from 'react'
import{
  restaurantsRequest,
  restaurantsTransform
} from './restaurants.service';
import { LocationContext } from '../locations/location.context'

export const RestaurantContext = createContext();

export const RestaurantcontextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext)

  const retriveRestaurants = (location) => {
    setIsLoading(true);

    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((error) => {
          setError(error);
        });
    }, 2000);
  }

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      console.log(locationString);
      retriveRestaurants(locationString);
    }
    //console.log(locationString);
  },[location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error
      }}
    >
      {children}
    </RestaurantContext.Provider>
  )
};
