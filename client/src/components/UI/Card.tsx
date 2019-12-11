import styled from 'styled-components'

interface CardProps {
  size?: string
}

export default styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  height: ${props => (props.size === 'large' ? '100%' : '290px')};
  border-radius: 8px;
  box-shadow: 0 0 5px #ccc;
  overflow: hidden;
`
