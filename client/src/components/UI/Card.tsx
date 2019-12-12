import styled from 'styled-components'

interface CardProps {
  size?: string
}

export default styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  height: ${props => {
    if (props.size === 'full') {
      return '100%'
    } else if (props.size === 'small') {
      return '200px'
    } else {
      return '300px'
    }
  }};
  border-radius: 8px;
  box-shadow: 0 0 5px #ccc;
  overflow: hidden;
`
