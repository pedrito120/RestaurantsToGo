import React, { createContext, useState } from 'react'
import { locationRequest, locationTransform} from './location.service'

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
  const [keyword, setKeyword] = useState('San Francisco');
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (searchKeyWord) => {
    //console.log(searchKeyWord);
    setIsLoading(true);
    setKeyword(searchKeyWord);
    if(!searchKeyWord.length){
      return;
    }
    locationRequest(searchKeyWord.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false)
        //console.log(result)
        setLocation(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };
  return(
    <LocationContext.Provider value={{keyword, isLoading, error, location, search: (data) => {onSearch(data)} }}>
      {children}
    </LocationContext.Provider>
  )
};
