import React, { useContext } from 'react'
import styled from 'styled-components'

import sizes from '../UI/CardSizes'
import ColorCard, { IColor } from './ColorCard'

interface ColorListProps {
  colors: IColor[]
  size?: string
  disabled?: boolean
  singleRow?: boolean
}

const ColorListContainer = styled.div<any>`
  flex: ${props => (props.singleRow ? 0 : 1)};
  display: grid;
  grid-template-columns: ${props =>
    `repeat(${props.size === 'small' ? 'auto-fit' : 'auto-fill'}, minmax(${
      sizes[props.size].width
    }, 1fr))`};
  grid-template-rows: auto 1fr;
  padding: 1rem 1rem 0 1rem;

  @media (max-width: 500px) {
    padding: 1rem 0;
  }
`

const ColorList = (props: ColorListProps) => {
  const { size = 'medium', singleRow = false } = props

  return (
    <ColorListContainer singleRow={singleRow} size={size}>
      {props.colors.map((color, i) => (
        <ColorCard key={i} color={color} disabled={props.disabled} size={props.size} />
      ))}
    </ColorListContainer>
  )
}

export default ColorList
