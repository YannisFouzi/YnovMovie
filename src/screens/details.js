import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
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
  }, [])

  return (
    <View>
      <Text>{film.original_title}</Text>
      <Avatar urlImage={`https://image.tmdb.org/t/p/w500${film.poster_path}`} />
      <Text>{film.overview}</Text>
      <Text>Date de sortie : {film.release_date}</Text>
      <Text>Moyenne des votes : {film.vote_average}</Text>
    </View>
  )
}

export default Details
