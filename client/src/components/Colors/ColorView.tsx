import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import Button from '../UI/Button'
import ColorCard, { IColor } from './ColorCard'
import ColorList from './ColorList'
import { Store } from '../Store'

const colorsys = require('colorsys')

type ColorViewProps = {
  color: IColor
}

const ColorView = (props: ColorViewProps) => {
  const [colors, setColors] = useState<IColor[]>([])
  const [dispatch] = useContext(Store)
  const { hex, hue } = props.color

  // Get shades for color by its Value
  useEffect(() => {
    // Clamp V so it's within 0 to 100
    const clamp = (val: number) => {
      return val <= 0 ? 0 : val >= 100 ? 100 : val
    }

    // Convert to HSV to adjust Value
    const hsv = colorsys.hexToHsv(hex)
    const shades: IColor[] = []

    const numShades = 5
    const step = Math.floor(hsv.v / numShades)
    const mid = Math.floor(numShades / 2)

    let currHsv = hsv
    currHsv.v = clamp(hsv.v - step * mid)

    // Adjust HSV and convert back to Hex
    for (let i = 0; i < numShades; i++) {
      // Manually set middle to original color since
      // HSV to Hex conversion is not perfect
      if (i === mid) {
        shades.push({ hex, hue })
      } else {
        shades.push({
          hex: colorsys.hsvToHex(currHsv).slice(1),
          hue: hue
        })
      }

      currHsv.v = clamp(currHsv.v + step)
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
      <ColorCard size='large' color={props.color} />
      <ColorList cols={5} colors={colors} disabled />
      <Centered>
        <Button onClick={() => dispatch({ action: 'DESELECT_COLOR' })}>
          Clear
        </Button>
      </Centered>
    </ColorViewContainer>
  )
}

export default ColorView
