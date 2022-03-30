import React from 'react'
import styled from 'styled-components'

const Avatar = ({ urlImage }) => {
  if (!urlImage) return null
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
