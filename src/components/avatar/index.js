import React from 'react'
import styled from 'styled-components'

const Avatar = ({ urlImage }) => {
  return (
    <Image
      source={{
        uri: urlImage
      }}
    />
  )
}

const Image = styled.Image`
  width: 200px;
  height: 200px;
`

export default Avatar
