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
  width: 15em;
  display: flex;
  flex-flow: column;
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
