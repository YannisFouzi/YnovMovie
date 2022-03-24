import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  useEffect(() => {
    alert(counterTwo)
  }, [counterTwo])

  const decrement = () => {
    setCounterTwo(counterTwo - 1)
  }

  const increment = () => {
    setCounterTwo(counterTwo + 1)
  }

  return (
    <View>
      <Text style={styles.text}>{counterTwo}</Text>
      <View>
        <TouchableOpacity onPress={decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increment}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 64
  }
})

export default Counter
