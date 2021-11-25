import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/locations/location.context'

const SearchBarContainer = styled(View)`
  padding: 16px;
`

export const SearchComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeywork, setSearchKeywork] = useState(keyword);

  useEffect(()=>{
    search(keyword);
  },[]);

  return (
    <SearchBarContainer>
      <Searchbar
          placeholder='Search for a location'
          onSubmitEditing = {() => {
            search(searchKeywork);
          }}
          value={searchKeywork}
          onChangeText={ (text) => {
            setSearchKeywork(text)
          } }
      />
    </SearchBarContainer>
  );
};
