import React, { useContext } from 'react'
import styled from 'styled-components'

import { Store } from '../Store'
import Card from '../UI/Card'

// Hex should exclude the preceding #
export interface IColor {
  hex: string
  hue: string
}

interface ColorProps {
  color: IColor
  size?: string
  disabled?: boolean
}

const ColorCard = (props: ColorProps) => {
  const { color, disabled, size } = props
  const [state, dispatch] = useContext(Store)

  const Color = styled.div`
    flex: 1;
    background-color: #${color.hex};
  `

  const ColorDetails = styled.div`
    padding: 1em;
  `
  const handleClick = () => {
    if (disabled) {
      return
    }
    dispatch({ type: 'SELECT_COLOR', payload: color })
  }

  return (
    <Card size={size} onClick={handleClick}>
      <Color />
      <ColorDetails>#{color.hex.toLowerCase()}</ColorDetails>
    </Card>
  )
}

export default ColorCard
