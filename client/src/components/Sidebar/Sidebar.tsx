import React, { useContext } from 'react'
import styled from 'styled-components'

import Button from '../UI/Button'
import Menu from './Menu'
import { Store } from '../Store'

interface SidebarProps {
  items: string[]
}

const Sidebar = (props: SidebarProps) => {
  const [state, dispatch] = useContext(Store)

  const SidebarContainer = styled.div`
    width: 15em;
  `

  return (
    <SidebarContainer>
      <Button onClick={() => dispatch({ type: 'RANDOM_COLOR' })}>Random Color</Button>
      <Menu items={props.items} />
    </SidebarContainer>
  )
}

export default Sidebar
