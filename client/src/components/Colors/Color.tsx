import React from 'react'
import styled from 'styled-components'

import Card from '../UI/Card'

export interface IColor {
  hex: string
  hue: string
}

const Color = (props: IColor) => {
  const { hex } = props

  const CardContainer = styled.div`
    display: flex;
    border: 1px gray solid;
    border-radius: 3px;
  `

  const Color = styled.div`
    background-color: #${hex};
  `

  const CardDetails = styled.div``

  return (
    <Card>
      <Color />
      <CardDetails>{hex}</CardDetails>
    </Card>
  )
}

export default Color
