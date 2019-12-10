import React from 'react'
import styled from 'styled-components'

import Card from '../UI/Card'

export interface IColor {
  hex: string
  hue: string
}

type ColorProps = {
  width: Number
} & IColor

const Color = (props: ColorProps) => {
  const { hex, width } = props

  const Color = styled.div`
    flex: 1;
    background-color: #${hex};
  `

  const CardDetails = styled.div`
    padding: 1em;
  `

  return (
    <Card width={width}>
      <Color />
      <CardDetails>{hex}</CardDetails>
    </Card>
  )
}

export default Color
