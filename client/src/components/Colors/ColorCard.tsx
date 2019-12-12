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
  noShadow?: boolean
}

const Color = styled.div<any>`
  flex: 1;
  background-color: #${props => props.hex};
`

const ColorDetails = styled.div`
  padding: 0.75em;
`

const ColorCard = (props: ColorProps) => {
  const { color, disabled, noShadow, size } = props
  const [state, dispatch] = useContext(Store)

  const handleClick = () => {
    if (disabled) {
      return
    }
    dispatch({ type: 'SELECT_COLOR', payload: color })
  }

  return (
    <Card size={size} onClick={handleClick} disabled={disabled} noShadow={noShadow}>
      <Color {...color} />
      <ColorDetails>#{color.hex.toLowerCase()}</ColorDetails>
    </Card>
  )
}

export default ColorCard
