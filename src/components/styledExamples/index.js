import React from 'react'
import styled from 'styled-components'

const StyledExamples = () => {
  return (
    <>
      <Square />
      <Square secondary />
      <Circle size={300} />
    </>
  )
}
const Circle = styled.View`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.size / 2};
  background-color: ${props => props.theme.secondary};
`

const Square = styled.View`
  width: 100px;
  height: 100px;
  background-color: ${props => (props.secondary ? 'green' : 'red')};
`

export default StyledExamples
