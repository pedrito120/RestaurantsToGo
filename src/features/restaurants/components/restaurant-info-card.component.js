import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import star from '../../../../assets/star';
import open from '../../../../assets/open';
const Tittle = styled.Text`
    color: ${props => props.theme.colors.text.primary};
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.body};
    `;
const Info = styled.View` 
    padding: ${props => props.theme.space[3]};
    font-size: ${props => props.theme.fontSizes.caption};
    `;
const Address = styled.Text` 
    font-family: ${props => props.theme.fonts.heading};
    `;
const RestaurantCard = styled(Card)`
    padding: ${props => props.theme.space[3]};
    background-color: ${props => props.theme.colors.ui.quaternary};
    `;

const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${props => props.theme.colors.ui.quaternary};
    `;
const Rating = styled.View`
    display: flex;
    flex-direction: row;
    `;
const Open = styled.View`
    display:flex;
    right:0;
    position: absolute;
    padding:${props => props.theme.space[3]};
    `;
const Closed = styled.Text`
    font-family: ${props => props.theme.fonts.monospace};
    color: red;
    padding:${props => props.theme.space[3]};
    font-size: ${props => props.theme.fontSizes.body};
    `;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "restaurant mexican",
        icon,
        photos = ['https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow='],
        address = "1 Norte, 38 Oriente",
        isOpenNow = "false",
        rating = 8,
        isClosedTemporarily = "true",
    } = restaurant;
    const ratingArray = Array.from(new Array(Math.ceil(rating)));
    console.log(ratingArray);
    return (
        <RestaurantCard>
            <RestaurantCardCover elevation={5} source={{ uri: photos[0] }} />
            <Info>
                <Tittle>{name}</Tittle>
                <Rating>
                    {ratingArray.map(() => (
                        <SvgXml xml={star} width={20} height={20} />
                    ))}
                </Rating>
                <Open>
                    {isOpenNow === "true" ? <SvgXml xml={open} width={50} height={50} /> : null}
                    {isClosedTemporarily === "true" ? <Closed>CLOSED TEMPORARILY</Closed> : null}
                </Open>

                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );

}

