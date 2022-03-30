import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const Details = ({ route }) => {
  const [film, setFilm] = useState({})
  const {
    params: { id }
  } = route
  console.log('🚀 ~ file: details.js ~ line 8 ~ Details ~ id', id)

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2a5937dcefab1c5203d73e1c2df32de0`
      )
      .then(res => {
        console.log(res.data)
        setFilm(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  })

  return (
    <FlatList
      data={Details}
      renderItem={({ item }) => (
        <ViewCard>
          <Title>{film.original_title}</Title>
          <ViewImage>
            <Avatar
              urlImage={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            />
          </ViewImage>
          <Overview>{film.overview}</Overview>
          <TextStyled>Date de sortie : {film.release_date}</TextStyled>
          <TextStyled>Moyenne des votes : {film.vote_average}</TextStyled>
        </ViewCard>
      )}
    />
  )
}
const ViewCard = styled.View`
  border: 5px solid blue;
`
const Overview = styled.Text`
  padding: 15px;
  font-size: 20px;
`

const TextStyled = styled.Text`
  text-align: center;
  font-size: 25px;
  color: green;
`
const Title = styled.Text`
  font-family: zocial;
  text-align: center;
  font-size: 30px;
  color: red;
`

const ViewImage = styled.View`
  align-items: center;
`

export default Details
