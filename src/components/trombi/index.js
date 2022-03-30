import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import axios from 'axios'

const Trombi = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    axios
      .get('https://hp-api.herokuapp.com/api/characters')
      .then(res => {
        setFilms(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
  return (
    <View>
      <Text>Trombi</Text>
      <FlatList
        data={films}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{ height: 200, width: 200 }}
              source={{ uri: `https:${item.image.split(':')[1]}` }}
            />
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  )
}

export default Trombi
