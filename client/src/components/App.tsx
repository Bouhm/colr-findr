import React, { useState, useEffect } from 'react'

import ColorContainer from './Colors/ColorContainer'
import { ColorProvider, ColorContext } from './Contexts/ColorContext'
import { IColor } from './Colors/Color'
import NavBar from './Nav/NavBar'

const URI = 'https://colorsapi.herokuapp.com/json'

const App: React.FC = () => {
  const [data, setData] = useState<Array<IColor>>([])

  useEffect(() => {
    fetch(URI, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setData(data.colors)
      })
  }, [])

  return (
    <div>
      <NavBar />
      <ColorProvider>
        <ColorContainer colors={data} />
      </ColorProvider>
    </div>
  )
}

export default App
