import React from "react";
import { StatusBar, SafeAreaView, View, Platform,FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

console.log(StatusBar.currentHeight);
const isAndroid = Platform.OS === 'android';
const SafeArea = styled(SafeAreaView)`
    flex:1;
    margin-top: ${isAndroid? StatusBar.currentHeight + 'px': 0};
`;
const SearchContainer = styled(View)`
    padding: ${props => props.theme.space[3]};
`;
const RestaurantListContainer = styled(View)`
    flex: 1;
    padding: 10px;
`;

export const RestaurantScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar/>
            </SearchContainer>
           <FlatList
           data={[{name:1},{name:2},{name:3}]}
           renderItem={()=><RestaurantInfoCard/>}
           keyExtractor={(item)=>item.id}
           contentContainerStyle={{padding:16}}
           />
                
            
        </SafeArea>
    )
}
  
