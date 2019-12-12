import React, { useContext } from 'react'
import styled from 'styled-components'

import ColorCard, { IColor } from './ColorCard'

interface ColorListProps {
  colors: IColor[]
  size?: string
  disabled?: boolean
}

const ColorListContainer = styled.div<any>`
  overflow-y: auto;
  display: grid;
  grid-template-columns: ${props => {
    if (props.size === 'small') {
      return 'repeat(auto-fit, minmax(200px, 1fr))'
    } else {
      return 'repeat(auto-fit, minmax(275px, 1fr))'
    }
  }};
  grid-template-rows: auto 1fr;
  grid-gap: 2rem;
  padding: 2rem;
`

const ColorList = (props: ColorListProps) => {
  return (
    <ColorListContainer size={props.size}>
      {props.colors.map(color => (
        <ColorCard key={color.hex} color={color} disabled={props.disabled} size={props.size} />
      ))}
    </ColorListContainer>
  )
}

export default ColorList
