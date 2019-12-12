import styled from 'styled-components'

import sizes from './CardSizes'

interface CardProps {
  size?: string
  noShadow?: boolean
}

export default styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  height: ${props => (props.size ? sizes[props.size].height : sizes.medium.height)};
  border: ${props => (props.noShadow ? '1px solid black' : 'none')};
  border-radius: 8px;
  box-shadow: ${props => (props.noShadow ? 'none' : '0 0 5px #ccc')};
  overflow: hidden;
  margin: 1rem;
`
