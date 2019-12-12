import React, { useContext } from 'react'
import styled from 'styled-components'
import Search from './Search'
import { Store } from '../Store'

const NavContainer = styled.div`
  background-color: #363c3c;
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
const Logo = styled.img`
  vertical-align: middle;
  height: 2.5em;

  :hover {
    cursor: pointer;
  }
`

const NavBar = () => {
  const [state, dispatch] = useContext(Store)

  return (
    <NavContainer>
      <NavLeft>
        <Logo onClick={() => dispatch({ type: 'RESET_ALL' })} src="./logo-symbol.svg" alt="logo " />
      </NavLeft>
      <NavRight>
        <Search />
      </NavRight>
    </NavContainer>
  )
}

export default NavBar
