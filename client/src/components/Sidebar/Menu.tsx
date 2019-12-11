import React, { ReactNode } from 'react'
import styled from 'styled-components'

type MenuProps = {
  items: string[]
}

const Menu = (props: MenuProps) => {
  const { items } = props

  const MenuContainer = styled.div`
    display: flex;
    flex-flow: column;
  `

  const MenuItem = styled.div``

  return (
    <div>
      {items.map(item => (
        <MenuItem>{item}</MenuItem>
      ))}
    </div>
  )
}

export default Menu
