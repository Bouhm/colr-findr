import React from 'react'
import styled from 'styled-components'

import Color, { IColor } from './Color'

type ColorContainerProps = {
  colors: Array<IColor>
}

const Colors = (props: ColorContainerProps) => {
  const ColorsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 400px) {
      display: block;
    }
  `

  return (
    <ColorsContainer>
      {props.colors.map(color => (
        <Color key={color.hex} {...color} />
      ))}
    </ColorsContainer>
  )
}

export default Colors
