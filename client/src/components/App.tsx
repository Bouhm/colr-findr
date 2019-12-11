import React, { useContext, useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import ColorList from './Colors/ColorList'
import ColorView from './Colors/ColorView'
import NavBar from './Nav/NavBar'
import Sidebar from './Sidebar/Sidebar'
import { Store } from './Store'

const AppContainer = styled.div`
  height: 100vh;
`

const Main = styled.main`
  height: 100%;
  display: flex;
`

const Content = styled.div`
  flex: 1;
`

const App: React.FC = () => {
  const URI = 'https://colorsapi.herokuapp.com/json'
  const hues = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray']

  const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`

  const COLORS_PER_PAGE = 12
  const [currPageNum, setCurrPageNum] = useState(1)
  const [state, dispatch] = useContext(Store)

  useEffect(() => {
    fetch(URI, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_DATA', payload: data.colors }))
  }, [])

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

  const { data, hueFilter, selectedColor } = state
  const startIdx = (currPageNum - 1) * COLORS_PER_PAGE
  const endIdx = startIdx + COLORS_PER_PAGE
  const colors = hueFilter ? data.filter(color => color.hue === hueFilter.toLowerCase()) : data

  return (
    <AppContainer>
      <GlobalStyle />
      <NavBar />
      <Main>
        <Sidebar items={hues} />
        <Content>
          {selectedColor ? (
            <ColorView color={selectedColor} />
          ) : (
            <>
              {<ColorList cols={4} colors={colors.slice(startIdx, endIdx)} />}
              {Paginate()}
            </>
          )}
        </Content>
      </Main>
    </AppContainer>
  )
}

export default App
