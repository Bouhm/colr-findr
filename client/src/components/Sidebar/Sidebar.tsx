import React from 'react'
import styled from 'styled-components'

import Button from '../UI/Button'
import Menu from './Menu'

interface SidebarProps {
  items: string[]
}

const Sidebar = (props: SidebarProps) => {
  const SidebarContainer = styled.div`
    width: 15em;
  `

  return (
    <SidebarContainer>
      <Button>Random Color</Button>
      <Menu items={props.items} />
    </SidebarContainer>
  )
}

export default Sidebar
