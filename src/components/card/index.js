import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Avatar from '../avatar'
import { CommonText } from '../texts'

const Card = ({ urlImage, name }) => {
  return (
    <Container>
      <Avatar urlImage={urlImage} />
      <CommonText>{name}</CommonText>
    </Container>
  )
}

const Container = styled.View`
  padding: 12px;
  background-color: red;
  justify-content: center;
`

Card.propTypes = {}

export default Card
