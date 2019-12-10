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
  `

  const columns = 4
  const width = 100 / columns - 1

  return (
    <ColorsContainer>
      {props.colors.map(color => (
        <Color key={color.hex} width={width} {...color} />
      ))}
    </ColorsContainer>
  )
}

export default Colors
