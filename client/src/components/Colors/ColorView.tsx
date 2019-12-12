import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Store } from '../Store'
import Button from '../UI/Button'
import ColorCard, { IColor } from './ColorCard'
import ColorList from './ColorList'

const colorsys = require('colorsys')

interface ColorViewProps {
  color: IColor
}

const ColorView = (props: ColorViewProps) => {
  const [shades, setShades] = useState<IColor[]>([])
  const [state, dispatch] = useContext(Store)
  const { hex, hue } = props.color

  // Clamp V so it's within 0 to 100
  const clamp = (val: number) => {
    return val <= 0 ? 0 : val >= 100 ? 100 : val
  }

  // Get shades for color by its Value
  useEffect(() => {
    // Convert to HSV to adjust Value
    const hsv = colorsys.hexToHsv(hex)
    const colorShades: IColor[] = []

    const numShades = 5
    const step = Math.floor(hsv.v / numShades)
    const mid = Math.floor(numShades / 2)

    const currHsv = hsv
    currHsv.v = clamp(hsv.v - step * mid)

    // Adjust HSV and convert back to Hex
    for (let i = 0; i < numShades; i++) {
      // Manually set middle to original color since
      // HSV to Hex conversion is not perfect
      if (i === mid) {
        colorShades.push({ hex, hue })
      } else {
        colorShades.push({
          hex: colorsys.hsvToHex(currHsv).slice(1),
          hue,
        })
      }

      currHsv.v = clamp(currHsv.v + step)
    }

    setShades(colorShades)
  }, [state.selectedColor])

  const ColorViewContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
  `

  const FullCardContainer = styled.div`
    height: 100%;
    padding: 2rem;
  `

  const Centered = styled.div`
    margin: 0 auto;
  `

  return (
    <ColorViewContainer>
      <FullCardContainer>
        <ColorCard size="full" color={props.color} />
      </FullCardContainer>
      <ColorList size="small" colors={shades} disabled={true} />
      <Centered>
        <Button onClick={() => dispatch({ type: 'DESELECT_COLOR' })}>Clear</Button>
      </Centered>
    </ColorViewContainer>
  )
}

export default ColorView
