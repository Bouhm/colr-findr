import React, { useContext } from 'react'
import styled from 'styled-components'

import ColorCard, { IColor } from './ColorCard'

type ColorListProps = {
  cols: number
  colors: IColor[]
}

const ColorList = (props: ColorListProps) => {
  const ColorListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${props.cols}, 1fr);
    grid-gap: 2rem;
  `

  return (
    <ColorListContainer>
      {props.colors.map(color => (
        <ColorCard key={color.hex} {...color} />
      ))}
    </ColorListContainer>
  )
}

export default ColorList
