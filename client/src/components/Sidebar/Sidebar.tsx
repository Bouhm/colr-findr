import React, { useContext } from 'react'
import styled from 'styled-components'

import { Store } from '../Store'
import Button from '../UI/Button'
import Menu from './Menu'

interface SidebarProps {
  items: string[]
}

const SidebarContainer = styled.div`
  background-color: #d6d8d8;
  width: 16em;
  display: flex;
  flex-flow: column;
  padding: 2rem 1.5rem;
  box-shadow: 0 0 5px #a9a;
`

const Sidebar = (props: SidebarProps) => {
  const [state, dispatch] = useContext(Store)

  return (
    <SidebarContainer>
      <Button onClick={() => dispatch({ type: 'RANDOM_COLOR' })}>Random Color</Button>
      <Menu items={props.items} />
    </SidebarContainer>
  )
}

export default Sidebar
