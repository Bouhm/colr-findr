import React, { useContext, useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import ColorList from './Colors/ColorList'
import ColorView from './Colors/ColorView'
import NavBar from './Nav/NavBar'
import SidePanel from './Panel/SidePanel'
import { Store } from './Store'
import { IColor } from './Colors/ColorCard'

const URI = 'https://colorsapi.herokuapp.com/json'
const hues = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray']
const COLORS_PER_PAGE = 12

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body, input {
    font-family: 'Source Serif Pro', serif;
  }

  * {
    box-sizing: border-box;
  }
`

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
`
const Main = styled.main`
  display: flex;
  margin-top: 4em;

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`

const Content = styled.div`
  flex: 1;
`

const App: React.FC = () => {
  const [state, dispatch] = useContext(Store)
  const { data, hueFilter, search, selectedColor } = state

  useEffect(() => {
    fetch(URI, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_DATA', payload: data.colors })
        setColors(data.colors)
      })
  }, [])

  const [colors, setColors] = useState<IColor[]>([])
  const [currPageNum, setCurrPageNum] = useState(1)

  // Filter colors
  useEffect(() => {
    let filteredColors = data

    // Filter by hue
    if (hueFilter) {
      filteredColors = hueFilter
        ? data.filter(color => color.hue === hueFilter.toLowerCase())
        : data
    }

    // Filter by search
    if (search) {
      // Trim #
      const searchStr = search.toLowerCase().replace('#', '')

      filteredColors = filteredColors.filter(color => color.hex.toLowerCase().startsWith(searchStr))
    }

    setColors(filteredColors)

    // Reset page num whenever filter changes
    setCurrPageNum(1)
  }, [hueFilter, search])

  const Paginate = () => {
    const numPages = Math.ceil(colors.length / COLORS_PER_PAGE)

    const Pages = styled.div`
      margin: 0 auto;
      padding: 0.5em 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `

    const PageNumber = styled.span<any>`
      font-weight: ${props => (props.underline ? 'bold' : 'normal')};
      text-decoration: ${props => (props.underline ? 'underline' : 'none')};
      margin: 0 1em;

      :hover {
        cursor: pointer;
      }
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
        <SidePanel items={hues} />
        <Content>
          {selectedColor ? (
            <ColorView color={selectedColor} />
          ) : (
            <>
              {<ColorList colors={colors.slice(startIdx, endIdx)} />}
              {Paginate()}
            </>
          )}
        </Content>
      </Main>
    </AppContainer>
  )
}

export default App
