import styled from 'styled-components'

import sizes from './CardSizes'

interface CardProps {
  size?: string
}

export default styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  height: ${(props: CardProps) => (props.size ? sizes[props.size].height : sizes.medium.height)};
  border-radius: 8px;
  box-shadow: 0 0 5px #ccc;
  overflow: hidden;
  margin: 1rem;
`
