import styled from 'styled-components'

import sizes from './CardSizes'

interface CardProps {
  size?: string
  disabled?: boolean
  noShadow?: boolean
}

export default styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  min-height: ${sizes.small.height};
  height: ${props => (props.size ? sizes[props.size].height : sizes.medium.height)};
  border: ${props => (props.noShadow ? '1px solid black' : 'none')};
  border-radius: 7px;
  box-shadow: ${props => (props.noShadow ? 'none' : '0 0 5px #a9a')};
  overflow: hidden;
  margin: 1rem;
  cursor: ${props => (props.disabled || props.size === 'full' ? 'unset' : 'pointer')};
  transition: all 0.1s ease-in-out;

  :hover {
    transform: ${props =>
      props.disabled || props.size === 'full' ? 'none' : 'translate3d(0px, -5px, 0px)'};
  }
`
