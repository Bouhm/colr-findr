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

const MenuItem = styled.div<any>`
  margin: 0.5em 0;
  cursor: pointer;
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
`

const Menu = (props: MenuProps) => {
  const { items } = props
  const [state, dispatch] = useContext(Store)

  const handleClick = (item: string) => {
    // Leave card detail view when searching
    state.selectedColor && dispatch({ type: 'DESELECT_COLOR' })

    // Toggle off hue filter if clicked again
    if (state.hueFilter === item) {
      dispatch({ type: 'RESET_FILTER', payload: item })
    } else {
      // Set hue filter
      dispatch({ type: 'FILTER_COLOR', payload: item })
    }
  }

  return (
    <MenuContainer>
      {items.map(item => (
        <MenuItem key={item} selected={item === state.hueFilter} onClick={() => handleClick(item)}>
          {item}
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

export default Menu
