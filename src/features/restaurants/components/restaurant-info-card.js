import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'
import styled from 'styled-components/native'
import star from './../../../../assets/star'
import open from './../../../../assets/open'

const RestaurantCard = styled(Card)`
  background-color: white;
  padding: 5px;
  margin-bottom: 10px;
`

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
`

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`
const LineIcos = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`
const StarsLine = styled(View)`
  flex-direction: row;
`

const OpenOno = styled(View)`
  flex-direction: row;
`

const SvgXmlOne = styled(SvgXml)`
  width: 20px;
  height: 20px;
`
  //border: 1px solid black;
const TextClosedTemp = styled(Text)`
  color: #f44336 ;
`

export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name = 'Some nice resturant',
    //icon = 'raiting',
    photos = ['https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg'],
    address = 'some random street',
    isOpenNow = true,
    raiting = 3,
    isCloredTemporarily = false,
    placeId
  } = restaurant

  const ratingArray = Array.from(new Array(Math.ceil(raiting)))

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <LineIcos>
          <StarsLine>
            {ratingArray.map((value, index)=> {
              return <SvgXmlOne xml={star} key={`star-${placeId}-${index}`}/>
            })}
          </StarsLine>
          <OpenOno>
            { isCloredTemporarily ? <TextClosedTemp>CLOSED TEMPORARILY</TextClosedTemp> : undefined}
            { isOpenNow ? <SvgXmlOne xml={open}/> : undefined}
          </OpenOno>
        </LineIcos>
        <Address>{address}</Address>
        </Info>
    </RestaurantCard>
  )
}

