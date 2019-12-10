import React from 'react'
import Color, { IColor } from './Color'

type ColorContainerProps = {
  colors: Array<IColor>
}

const Colors = (props: ColorContainerProps) => {
  const { colors } = props

  return (
    <div>
      {colors.map(color => (
        <Color key={color.hex} {...color} />
      ))}
    </div>
  )
}

export default Colors
