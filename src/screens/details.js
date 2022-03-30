import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import Title from '../components/title'
import ViewCard from '../components/viewCard'
import TextStyled from '../components/textStyled'
import Overview from '../components/overview'
import ViewImage from '../components/viewImage'
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

export default Details
