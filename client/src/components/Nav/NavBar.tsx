import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.div``
const NavLeft = styled.div`
  float: left;
`

const NavBar = () => {
  return (
    <NavContainer>
      <NavLeft></NavLeft>
    </NavContainer>
  )
}

export default NavBar
