import React, { useContext } from 'react'
import styled from 'styled-components'

import Button from '../UI/Button'
import Menu from './Menu'
import { Store } from '../Store'

interface SidebarProps {
  items: string[]
}

const SidebarContainer = styled.div`
  background-color: #d6d8d8;
  width: 15em;
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
