import React from 'react'
import styled from 'styled-components'

import Card from '../UI/Card'

export interface IColor {
  hex: string
  hue: string
}

const Color = (props: IColor) => {
  const { hex } = props

  const Color = styled.div`
    flex: 1;
    background-color: #${hex};
  `

  const CardDetails = styled.div`
    padding: 1em;
  `

  return (
    <Card>
      <Color />
      <CardDetails>#{hex.toLowerCase()}</CardDetails>
    </Card>
  )
}

export default Color
