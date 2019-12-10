import React, { useState, useEffect } from 'react'
import NavBar from './Nav/NavBar'
import ColorContainer from './Colors/ColorContainer'
import { IColor } from './Colors/Color'

const URI = 'https://colorsapi.herokuapp.com/json'

const App: React.FC = () => {
  const [colorsData, setColorsData] = useState<Array<IColor>>([])

  useEffect(() => {
    fetch(URI, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(colorsData => {
        colorsData(colorsData.colors)
      })
  }, [])

  return (
    <div>
      <NavBar />
      <ColorContainer colors={colorsData} />
    </div>
  )
}

export default App
