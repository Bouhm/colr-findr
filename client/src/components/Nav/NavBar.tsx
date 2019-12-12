import React from 'react'
import styled from 'styled-components'
import Search from './Search'

const NavContainer = styled.div`
  background-color: black;
  line-height: 4em;
  padding: 0 1em;
  height: 4em;
`

const NavLeft = styled.div`
  float: left;
`
const NavRight = styled.div`
  float: right;
`

const NavBar = () => {
  return (
    <NavContainer>
      <NavLeft />
      <NavRight>
        <Search />
      </NavRight>
    </NavContainer>
  )
}

export default NavBar
