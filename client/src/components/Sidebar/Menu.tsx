import React, { useContext } from 'react'
import styled from 'styled-components'

import { Store } from '../Store'

interface MenuProps {
  items: string[]
}

const MenuContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: 1em 0;
`

const MenuItem = styled.div`
  margin: 0.5em 0;
  cursor: pointer;
`

const Menu = (props: MenuProps) => {
  const { items } = props
  const [state, dispatch] = useContext(Store)

  const handleClick = (item: string) => {
    // Leave card detail view when searching
    state.selectedColor && dispatch({ type: 'DESELECT_COLOR' })

    // Set hue filter
    dispatch({ type: 'FILTER_COLOR', payload: item })
  }

  return (
    <MenuContainer>
      {items.map(item => (
        <MenuItem key={item} onClick={() => handleClick(item)}>
          {item}
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

export default Menu
