import React, { useState, useContext, useEffect } from 'react'

import ColorList from './Colors/ColorList'
import { ColorProvider, ColorContext } from './Contexts/ColorContext'
import ColorView from './Colors/ColorView'
import { IColor } from './Colors/ColorCard'
import NavBar from './Nav/NavBar'

const URI = 'https://colorsapi.herokuapp.com/json'

const App: React.FC = () => {
  const [data, setData] = useState<IColor[]>([])
  const { color: selectedColor } = useContext(ColorContext)

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
      {selectedColor ? (
        <ColorView {...selectedColor} />
      ) : (
        <ColorList colors={data} />
      )}
    </div>
  )
}

export default App
