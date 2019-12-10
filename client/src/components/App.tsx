import React, { useState, useContext, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'

import ColorList from './Colors/ColorList'
import { ColorProvider, ColorContext } from './Contexts/ColorContext'
import ColorView from './Colors/ColorView'
import { IColor } from './Colors/ColorCard'
import NavBar from './Nav/NavBar'
import styled from 'styled-components'

const URI = 'https://colorsapi.herokuapp.com/json'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`

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

  const AppContainer = styled.div`
    height: 100vh;
  `

  const Main = styled.main`
    height: 100%;
  `

  return (
    <AppContainer>
      <GlobalStyle />
      <NavBar />
      <Main>
        {selectedColor ? (
          <ColorView {...selectedColor} />
        ) : (
          <ColorList cols={4} colors={data} />
        )}
      </Main>
    </AppContainer>
  )
}

export default App
