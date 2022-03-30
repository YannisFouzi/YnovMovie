import React, { useState, useEffect } from 'react'
import { Text, FlatList, View } from 'react-native'
import styled from 'styled-components'
import { useFocusEffect } from '@react-navigation/native'
import readFavorite from '../utils/readFavorite'
import Avatar from '../components/avatar'
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
        <View>
          <Button
            onPress={() => navigation.navigate('Details', { id: item.id })}
          >
            <Avatar urlImage={item.image} />
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Button
              onPress={() => {
                checkFavorite(item)
              }}
            >
              <TextStyled>Retirer des favoris</TextStyled>
            </Button>
          </Button>
        </View>
      )}
    />
  )
}

const Button = styled.TouchableOpacity``
const TextStyled = styled.Text`
  font-size: 20px;
`

export default Favorite
