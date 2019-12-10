import React, { useContext } from 'react'
import styled from 'styled-components'

import Card from '../UI/Card'
import { ColorContext } from '../Contexts/ColorContext'

export interface IColor {
  hex: string
  hue: string
}

const Color = (props: IColor) => {
  const { hex } = props
  const { setColor } = useContext(ColorContext)

  const Color = styled.div`
    flex: 1;
    background-color: #${hex};
  `

  const CardDetails = styled.div`
    padding: 1em;
  `

  return (
    <Card>
      <Color
        onClick={() => {
          console.log(props)
          setColor(props)
        }}
      />
      <CardDetails>#{hex.toLowerCase()}</CardDetails>
    </Card>
  )
}

export default Color
