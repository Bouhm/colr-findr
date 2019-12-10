import React, { useContext } from 'react'
import styled from 'styled-components'

import ColorCard, { IColor } from './ColorCard'

type ColorListProps = {
  colors: Array<IColor>
}

const ColorList = (props: ColorListProps) => {
  const ColorListContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 400px) {
      display: block;
    }
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
