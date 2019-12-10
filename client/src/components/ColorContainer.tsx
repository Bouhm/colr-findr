import React from 'react'
import Card from './Card/Card'

export interface IColor {
  hex: string
  hue: string
}

type ColorContainerProps = {
  colors: Array<IColor>
}

const Colors = (props: ColorContainerProps) => {
  const { colors } = props

  return (
    <div>
      {colors.map(color => (
        <Card key={color.hex} color={color} />
      ))}
    </div>
  )
}

export default Colors
