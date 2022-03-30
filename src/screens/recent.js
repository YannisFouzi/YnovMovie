import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import styled from 'styled-components'
import axios from 'axios'
import Avatar from '../components/avatar'
import readFavorite from '../utils/readFavorite'
import addToFavorite from '../utils/addToFavorite'
import removeFromFavorite from '../utils/removeFromFavorite'

const Films = ({ navigation }) => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=2a5937dcefab1c5203d73e1c2df32de0'
      )
      .then(res => {
        console.log(res.data.results)
        setFilms(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const checkFavorite = async item => {
    const allFav = await readFavorite()
    console.log(allFav)
    const index = allFav.map(f => f.id).findIndex(itemId => itemId === item.id)
    if (index === -1) {
      addToFavorite(item)
    } else {
      removeFromFavorite(item)
    }
  }

  return (
    <FlatList
      data={films}
      renderItem={({ item }) => (
        <View>
          <Button
            onPress={() => navigation.navigate('Details', { id: item.id })}
          >
            <Text>{item.original_title}</Text>
            <Avatar
              urlImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            />
            <Text>{item.overview}</Text>
            <Button
              onPress={() => {
                checkFavorite(item)
              }}
            >
              <TextStyled>Add / Remove to Favorite</TextStyled>
            </Button>
          </Button>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  )
}

const Button = styled.TouchableOpacity``
const TextStyled = styled.Text`
  font-size: 20px;
`

Films.propTypes = {}

export default Films
