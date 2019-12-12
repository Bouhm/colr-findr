import React, { useContext } from 'react'
import styled from 'styled-components'

import sizes from '../UI/CardSizes'
import ColorCard, { IColor } from './ColorCard'

interface ColorListProps {
  colors: IColor[]
  size?: string
  disabled?: boolean
}

const ColorListContainer = styled.div<any>`
  overflow-y: auto;
  max-height: calc(100% - 3em);
  display: grid;
  grid-template-columns: ${props => `repeat(auto-fit, minmax(${sizes[props.size].width}, 1fr))`};
  grid-template-rows: auto 1fr;
  padding: 1rem;
`

const ColorList = (props: ColorListProps) => {
  const { size = 'medium' } = props

  return (
    <ColorListContainer size={size}>
      {props.colors.map((color, i) => (
        <ColorCard key={i} color={color} disabled={props.disabled} size={props.size} />
      ))}
    </ColorListContainer>
  )
}

export default ColorList
