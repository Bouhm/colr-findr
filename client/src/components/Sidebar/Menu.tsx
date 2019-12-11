import React, { useContext } from 'react'
import styled from 'styled-components'

import { Store } from '../Store'

interface MenuProps {
  items: string[]
}

const Menu = (props: MenuProps) => {
  const { items } = props
  const [state, dispatch] = useContext(Store)

  const MenuContainer = styled.div`
    display: flex;
    flex-flow: column;
  `

  const MenuItem = styled.div``

  return (
    <MenuContainer>
      {items.map(item => (
        <MenuItem key={item} onClick={() => dispatch({ type: 'FILTER_COLOR', payload: item })}>
          {item}
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

export default Menu
