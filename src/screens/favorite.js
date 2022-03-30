import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import readFavorite from '../utils/readFavorite'
import Button from '../components/button'
import Avatar from '../components/avatar'
import Title from '../components/title'
import ViewCard from '../components/viewCard'
import TextStyled from '../components/textStyled'
import Overview from '../components/overview'
import ViewImage from '../components/viewImage'
import addToFavorite from '../utils/addToFavorite'
import removeFromFavorite from '../utils/removeFromFavorite'

const Favorite = ({ navigation }) => {
  const [fav, setFav] = useState([])

  const addFavToState = async () => {
    const allFav = await readFavorite()
    setFav(allFav)
  }

  useFocusEffect(() => {
    addFavToState()
  })

  useEffect(() => {
    addFavToState()
  }, [])

  useEffect(() => {
    console.log(fav)
  }, [fav])

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
      keyExtractor={item => item.id}
      data={fav}
      renderItem={({ item }) => (
        <ViewCard>
          <Button
            onPress={() => navigation.navigate('Details', { id: item.id })}
          >
            <Title>{item.name}</Title>
            <ViewImage>
              <Avatar urlImage={item.image} />
            </ViewImage>
            <Overview>{item.description}</Overview>
            <Button
              onPress={() => {
                checkFavorite(item)
              }}
            >
              <TextStyled>Retirer des favoris</TextStyled>
            </Button>
          </Button>
        </ViewCard>
      )}
    />
  )
}

export default Favorite
