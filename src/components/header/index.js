import React from 'react';
import { View, Text } from 'react-native'; 

const Header = (props) => {  
console.log("🚀 ~ file: header.js ~ line 5 ~ Header ~ props", props)
    return (
        <View>
        <Text>{props.label}</Text>
      </View>
    )
}

export default Header