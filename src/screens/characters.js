import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Avatar from '../components/avatar'
import readFavorite from '../utils/readFavorite'
import addToFavorite from '../utils/addToFavorite'
import removeFromFavorite from '../utils/removeFromFavorite'

const Films = ({ navigation }) => {
  const [characters, setCharacters] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    console.log('couin-couin')
    axios
      .get(
        'https://api.themoviedb.org/3/movie/550?api_key=2a5937dcefab1c5203d73e1c2df32de0'
      )
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [])

  const checkFavorite = async item => {
    const allFav = await readFavorite()

    const index = allFav.map(f => f.id).findIndex(itemId => itemId === item.id)
    if (index === -1) {
      addToFavorite(item)
    } else {
      removeFromFavorite(item)
    }
  }

  return (
    <>
      <TextStyled>Film</TextStyled>
      <Button onPress={() => navigation.navigate('Favoris')}>
        <TextStyled>Favoris</TextStyled>
      </Button>
      <FlatList
        data={characters}
        keyExtractor={item => item.id}
        onEndReached={() => setOffset(offset + 20)}
        renderItem={({ item }) => (
          <Button
            onPress={() => navigation.navigate('Details', { id: item.id })}
          >
            <Avatar
              urlImage={`https:${item.thumbnail.path.split(':')[1]}.${
                item.thumbnail.extension
              }`}
            />
            <TextStyled>{item.name}</TextStyled>
            <Button
              onPress={() => {
                checkFavorite(item)
              }}
            >
              <TextStyled>ADD TO FAVORITE</TextStyled>
            </Button>
          </Button>
        )}
      />
    </>
  )
}

const Button = styled.TouchableOpacity``
const TextStyled = styled.Text``

Films.propTypes = {}

export default Films
