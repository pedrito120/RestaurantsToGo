import React, { useContext, useState } from 'react'
import { SafeAreaView, View, FlatList, TouchableOpacity } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'
import styled from 'styled-components/native'
import { RestaurantInfoCard } from '../components/restaurant-info-card'
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { SearchComponent } from '../components/search.component'
//const isAndroid = Platform.OS === 'android'

const ContainerScreen = styled(SafeAreaView)`
  flex: 1;
`
//margin-top: ${isAndroid && StatusBar.currentHeight}px;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`
const LoadingContainer = styled(View)`
  position: absolute;
  top: 25%;
  left: 44%;
`
export const RestaurantScreen = ({ navigation }) => {
  const [search, setSearch] = useState('')
  const onChangeSearch = query => setSearch(query)
  const {restaurants, isLoading, error} = useContext(RestaurantContext);
  return (
    <ContainerScreen>
        <SearchComponent />
      {
        isLoading ?
            <LoadingContainer>
              <ActivityIndicator
                size={50}
                style={Loading}
                animating={true}
                color={Colors.blue300}
              />
            </LoadingContainer>
          :
            <FlatList
              data={restaurants}
              renderItem={({ item }) =>{
                return (
                  <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetails",{restaurant: item})}>
                    <RestaurantInfoCard restaurant={item}/>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={((item, index) => index.toString())}
            />
      }
    </ContainerScreen>
  )
}
