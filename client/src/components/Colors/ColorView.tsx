import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import Button from '../UI/Button'
import ColorCard, { IColor } from './ColorCard'
import { ColorContext } from '../Contexts/ColorContext'
import ColorList from './ColorList'

const colorsys = require('colorsys')

const ColorView = (props: IColor) => {
  const [colors, setColors] = useState<IColor[]>([])
  const { setColor } = useContext(ColorContext)
  const { hex, hue } = props

  // Get shades for color by its Value
  useEffect(() => {
    // Clamp V so it's within 0 to 100
    const clamp = (val: number) => {
      return val <= 0 ? 0 : val >= 100 ? 100 : val
    }

    // Convert to HSV to adjust Value
    const hsv = colorsys.hexToHsv(hex)
    const shades: IColor[] = []

    const step = 15
    const numShades = 5
    const mid = Math.floor(numShades / 2)
    let currHsv = hsv
    currHsv.v = clamp(hsv.v - step * mid)

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

      currHsv.v = clamp(currHsv.v + step)
      if (currHsv.v === 100 || currHsv.v === 0) break
    }

    setColors(shades)
  }, [])

  const ColorViewContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
  `

  const Centered = styled.div`
    margin: 0 auto;
  `

  return (
    <ColorViewContainer>
      <ColorCard size="large" {...props} />
      <ColorList cols={5} colors={colors} disabled />
      <Centered>
        <Button onClick={() => setColor(null)}>Clear</Button>
      </Centered>
    </ColorViewContainer>
  )
}

export default ColorView
