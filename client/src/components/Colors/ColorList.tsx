import React, { useContext } from 'react'
import styled from 'styled-components'

import ColorCard, { IColor } from './ColorCard'

type ColorListProps = {
  colors: IColor[]
}

const ColorGrid = (props: ColorListProps) => {
  const ColorGridContainer = styled.div`
    margin: 0 auto;
    width: 100%;
  `

  const ColorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    grid-gap: 2rem;
    padding: 1rem;
  `

  return (
    <ColorGridContainer>
      <ColorGrid>
        {props.colors.map(color => (
          <ColorCard key={color.hex} {...color} />
        ))}
      </ColorGrid>
    </ColorGridContainer>
  )
}

export default ColorGrid
