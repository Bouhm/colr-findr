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

const COLORS_PER_PAGE = 12

const App: React.FC = () => {
  const [data, setData] = useState<IColor[]>([])
  const [currPageNum, setCurrPageNum] = useState(1)
  const { color: selectedColor } = useContext(ColorContext)

  useEffect(() => {
    fetch(URI, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setData(data.colors))
  }, [])

  const AppContainer = styled.div`
    height: 100vh;
  `

  const Main = styled.main`
    height: 100%;
  `

  const Paginate = () => {
    const numPages = Math.floor(data.length / COLORS_PER_PAGE)

    const Pages = styled.div`
      margin: 0 auto;
      width: 50%;
      display: flex;
      justify-content: space-evenly;
    `

    const PageNumber = styled.span<any>`
      font-weight: ${props => (props.underline ? 'bold' : 'normal')};
      text-decoration: ${props => (props.underline ? 'underline' : 'none')};
    `

    return (
      <Pages>
        {[...Array(numPages).keys()].map(i => (
          <PageNumber
            key={i}
            underline={currPageNum === i + 1}
            onClick={() => setCurrPageNum(i + 1)}
          >
            {i + 1}
          </PageNumber>
        ))}
      </Pages>
    )
  }

  const startIdx = (currPageNum - 1) * COLORS_PER_PAGE
  const endIdx = startIdx + COLORS_PER_PAGE

  return (
    <AppContainer>
      <GlobalStyle />
      <NavBar />
      <Main>
        {selectedColor ? (
          <ColorView {...selectedColor} />
        ) : (
          <>
            <ColorList cols={4} colors={data.slice(startIdx, endIdx)} />
            {Paginate()}
          </>
        )}
      </Main>
    </AppContainer>
  )
}

export default App
