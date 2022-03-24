import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const Details = ({ route }) => {
  const [character, setCharacter] = useState({})
  const {
    params: { id }
  } = route
  console.log('🚀 ~ file: details.js ~ line 8 ~ Details ~ id', id)

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://gateway.marvel.com/v1/public/characters',
      params: {
        id,
        ts: 1,
        apikey: '51f5653d973d80fcbea3d50882ddaa93',
        hash: '711890d64d763846dd2c44750a224905'
      }
    })
      .then(response => {
        setCharacter(...response.data.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <Container>
      <Avatar
        urlImage={`https:${character.thumbnail?.path.split(':')[1]}.${
          character.thumbnail?.extension
        }`}
      />
      <Text>{character.name}</Text>
      <Text>{character.description}</Text>
    </Container>
  )
}

const Container = styled.View``

export default Details
