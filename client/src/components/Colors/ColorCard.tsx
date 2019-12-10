import React, { useContext } from 'react'
import styled from 'styled-components'

import Card from '../UI/Card'
import { ColorContext } from '../Contexts/ColorContext'

// Hex should exclude the preceding #
export interface IColor {
  hex: string
  hue: string
}

type ColorProps = {
  size?: string
} & IColor

const ColorCard = (props: ColorProps) => {
  const { hex, size } = props
  const { setColor } = useContext(ColorContext)

  const Color = styled.div`
    flex: 1;
    background-color: #${hex};
  `

  const ColorDetails = styled.div`
    padding: 1em;
  `

  return (
    <Card onClick={() => setColor(props)} size={size}>
      <Color />
      <ColorDetails>#{hex.toLowerCase()}</ColorDetails>
    </Card>
  )
}

export default ColorCard
