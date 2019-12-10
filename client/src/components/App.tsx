import React, { useState, useEffect } from 'react'
import NavBar from './Nav/NavBar'
import Colors, { IColor } from './ColorContainer'

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
      <Colors colors={data} />
    </div>
  )
}

export default App
