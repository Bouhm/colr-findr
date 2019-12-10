import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import ColorCard, { IColor } from './ColorCard'
import ColorList from './ColorList'

const colorsys = require('colorsys')

const ColorView = (props: IColor) => {
  const [colors, setColors] = useState<IColor[]>([])
  const { hex, hue } = props

  // Get shades for color by its Value
  useEffect(() => {
    // Clamp V so it's within 0 to 100
    const clamp = (val: number, min: number, max: number) => {
      return val <= min ? min : val >= max ? max : val
    }

    // Convert to HSV to adjust Value
    const hsv = colorsys.hexToHsv(hex)
    const shades: IColor[] = []

    const step = 15
    const numShades = 5
    const mid = Math.floor(numShades / 2)
    let currHsv = hsv
    currHsv.v = hsv.v - step * mid
    currHsv.v = clamp(currHsv.v, 0, 100)

    // Adjust HSV and convert back to Hex
    for (let i = 0; i < numShades; i++) {
      // Original color
      if (i === mid) {
        shades.push({ hex, hue })
      } else {
        shades.push({
          hex: colorsys.hsvToHex(currHsv).slice(1),
          hue: hue
        })
      }

      currHsv.v += step
      currHsv.v = clamp(currHsv.v, 0, 100)
    }

    setColors(shades)
  }, [])

  const ColorViewContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
  `

  return (
    <ColorViewContainer>
      <ColorCard size="large" {...props} />
      <ColorList cols={5} colors={colors} />
    </ColorViewContainer>
  )
}

export default ColorView
