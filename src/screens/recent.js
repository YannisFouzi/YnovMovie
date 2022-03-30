import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import axios from 'axios'
import Button from '../components/button'
import Avatar from '../components/avatar'
import Title from '../components/title'
import ViewCard from '../components/viewCard'
import TextStyled from '../components/textStyled'
import Overview from '../components/overview'
import ViewImage from '../components/viewImage'
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
        <ViewCard>
          <Button
            onPress={() => navigation.navigate('Details', { id: item.id })}
          >
            <Title>{item.original_title}</Title>
            <ViewImage>
              <Avatar
                urlImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              />
            </ViewImage>
            <Overview>{item.overview}</Overview>
            <Button
              onPress={() => {
                checkFavorite(item)
              }}
            >
              <TextStyled>Add / Remove to Favorite</TextStyled>
            </Button>
          </Button>
        </ViewCard>
      )}
      keyExtractor={item => item.id}
    />
  )
}

Films.propTypes = {}

export default Films
