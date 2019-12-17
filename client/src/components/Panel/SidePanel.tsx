import React, { useContext } from 'react'
import styled from 'styled-components'

import { Store } from '../Store'
import Button from '../UI/Button'
import Menu from './Menu'

interface SidePanelProps {
  items: string[]
}

const SidePanelContainer = styled.div`
  background-color: #d6d8d8;
  border-right: 1px solid #adadad;
  font-size: 1.2em;
  width: 20rem;
  display: flex;
  flex-flow: column;
  padding: 2rem 2rem;
  box-shadow: 0 0 5px #a9a;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`

const SidePanel = (props: SidePanelProps) => {
  const [state, dispatch] = useContext(Store)

  return (
    <SidePanelContainer>
      <Button onClick={() => dispatch({ type: 'RANDOM_COLOR' })}>Random Color</Button>
      <Menu items={props.items} />
    </SidePanelContainer>
  )
}

export default SidePanel
